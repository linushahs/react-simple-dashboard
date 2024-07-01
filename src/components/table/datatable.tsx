import {
  ColumnDef,
  RowData,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FilterLinesIcon } from "assets";
import TitleLinkIcon from "assets/TitleLinkIcon";
import useSkipper from "hooks/useSkipper";
import { ProductResponse } from "utils/api";
import Button from "../button";
import TableFilters from "./table_filters";

// Update data function for editing cells ====================
declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

// Default column cell renderer for editing cells ============
// ===============================================================
const defaultColumn: Partial<ColumnDef<ProductResponse>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className="bg-transparent w-full outline-none focus:outline-gray-700 rounded-sm px-1.5"
      />
    );
  },
};

interface DataTableProps {
  data: ProductResponse[];
}

// DataTable component ========================================
function DataTable({ data }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [products, setProducts] = useState<ProductResponse[]>(data);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [editMode, setEditMode] = useState(false);

  const columns = useMemo<ColumnDef<ProductResponse>[]>(
    () => [
      {
        header: "Product Name",
        accessorKey: "product_name",
      },
      {
        accessorKey: "price",
        header: "Price",
      },
      {
        accessorKey: "rating",
        header: () => "Rating",
      },
      {
        accessorKey: "brand",
        header: "Brand",
        enableSorting: false,
      },
      {
        accessorKey: "availability",
        header: "Availability",
        enableSorting: false,
      },
    ],
    [editMode]
  );

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

  const table = useReactTable({
    columns,
    data: products,
    defaultColumn: editMode ? defaultColumn : undefined,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    autoResetPageIndex,
    state: {
      sorting,
      columnVisibility,
    },
    meta: {
      updateData: async (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex();

        // Update local state after successful backend update
        setProducts((oldProducts) =>
          oldProducts.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...oldProducts[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Visibility Buttons, filters, edit mode goes here =============================== */}
      <TableFilters table={table} setEditMode={setEditMode} />

      {products.length === 0 ? (
        <div>No products found</div>
      ) : (
        <Fragment>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full rounded-lg overflow-hidden">
              <thead className="bg-secondaryBg ">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          className="text-left py-2.5 pl-4 pr-8"
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              className={twMerge(
                                "flex gap-3 items-center text-textPrimary",
                                header.column.getCanSort() &&
                                  "cursor-pointer hover:bg-tertiaryBg/70 py-2 px-3 rounded-md"
                              )}
                              onClick={header.column.getToggleSortingHandler()}
                              title={
                                header.column.getCanSort()
                                  ? header.column.getNextSortingOrder() ===
                                    "asc"
                                    ? "Sort ascending"
                                    : header.column.getNextSortingOrder() ===
                                      "desc"
                                    ? "Sort descending"
                                    : "Clear sort"
                                  : undefined
                              }
                            >
                              <TitleLinkIcon className="size-[18px] text-gray-400" />

                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}

                              <span className="block ml-auto">
                                <FilterLinesIcon className="size-4" />
                              </span>
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, 10)
                  .map((row, idx) => {
                    return (
                      <tr
                        key={row.id}
                        className={twMerge("p-4", idx % 2 !== 0 && "bg-white")}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id} className=" py-4 px-6">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* Pagination goes here ====================================== */}
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-4">
              <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount().toLocaleString()}
                </strong>
              </span>
              <span className="flex items-center gap-1">
                | &nbsp; Go to page:
                <input
                  type="number"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                  className="border p-1 rounded w-16"
                />
              </span>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default DataTable;
