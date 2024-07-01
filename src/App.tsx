import Dashboard from "./layouts/Dashboard";
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

function App() {
  return (
    <main className="flex bg-background w-full min-h-screen">
      <Sidebar />

      <div className="w-[calc(100vw-var(--sidebar-width))] ml-auto">
        <Topbar />

        <Dashboard />
      </div>
    </main>
  );
}

export default App;
