import DataTable from "components/table/datatable";
import useQuery from "hooks/useQuery";
import { getProducts } from "utils/api";

function Dashboard() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery(() => getProducts());

  if (isLoading) {
    return <div className="p-5">Loading...</div>;
  }

  if (isError) {
    return <div className="p-5">Error loading data: {error.message}</div>;
  }

  return (
    <main className="p-5">
      {/* Table section goes here ============================ */}
      {products && <DataTable data={products} />}
    </main>
  );
}

export default Dashboard;
