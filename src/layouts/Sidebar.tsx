import { CreditUsageIcon, DatasetsIcon, WorkflowIcon } from "../assets";
import Button from "../components/button";

const menuItems = [
  {
    title: "Datasets",
    icon: <DatasetsIcon />,
  },
  {
    title: "Workflows",
    icon: <WorkflowIcon />,
  },
  {
    title: "Credit usage",
    icon: <CreditUsageIcon />,
  },
];

function Sidebar() {
  return (
    <div className="border-r border-borderPrimary w-[var(--sidebar-width)] min-h-screen fixed z-[100] bg-white flex flex-col">
      {/* Logo, title goes here ================================= */}
      <div className="h-[var(--topContainer-height)] px-4 flex items-center border-b border-borderPrimary ">
        <h1 className=" hidden xl:block">Grepsr</h1>
        <img src="/logo.jpg" className=" xl:hidden rounded-lg size-10"></img>
      </div>

      {/* Menu items goes here ================================== */}
      <ul className="p-4 xl:px-4 flex flex-col gap-2.5">
        {menuItems.map((item) => (
          <li
            key={item.title}
            className="flex gap-1.5  p-1.5 hover:bg-gray-100 cursor-pointer first:bg-primaryBg first:text-primary  rounded-md items-center justify-center xl:justify-start  [&>svg]:w-7 [&>svg]:h-7 "
          >
            {item.icon} <span className="hidden xl:block">{item.title}</span>
          </li>
        ))}
      </ul>

      {/* Help button, support =================================== */}
      <div className="hidden xl:flex h-[120px] bg-background p-3 flex-col justify-center items-center gap-3 rounded-lg mt-auto mx-4 mb-4">
        <p>Need any help?</p>
        <Button variant="solid" color="light">
          Contact Support
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
