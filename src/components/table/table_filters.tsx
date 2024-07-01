import { Table } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";
import { DownloadIcon, EyeOffIcon, FilterLinesIcon } from "../../assets";
import { ProductResponse } from "../../utils/api";
import Button from "../button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../dropdown";
import { Switch } from "../switch";

interface TableFiltersProps {
  table: Table<ProductResponse>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

function TableFilters({ table, setEditMode }: TableFiltersProps) {
  return (
    <header className="flex items-center justify-between mb-2">
      <div className="flex gap-4 items-center">
        <Button variant="solid">Operations</Button>

        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">
                <FilterLinesIcon className="size-4" /> Add Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-gray-200"
            >
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize text-base font-normal"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <span className="flex items-center gap-2">
          <label htmlFor="editMode">Edit Mode</label>
          <Switch
            id="editMode"
            onCheckedChange={(checked) => setEditMode(checked)}
          />
        </span>

        <Button variant="outline">
          <EyeOffIcon className="size-6" /> Show Metadata
        </Button>

        <Button variant="outline" className="px-2">
          <DownloadIcon className="size-6 text-primary" />
        </Button>
      </div>
    </header>
  );
}

export default TableFilters;
