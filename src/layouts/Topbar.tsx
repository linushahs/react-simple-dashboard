import {
  BackArrowIcon,
  CreditIcon,
  InfiniteIcon,
  InfoIcon,
  NotificationIcon,
} from "assets";

function Topbar() {
  return (
    <div className="w-full h-[var(--topContainer-height)] px-6 flex items-center justify-between bg-white border-b border-borderPrimary">
      {/* Left side items ================================== */}
      <span className="flex gap-4 items-center">
        <button>
          <BackArrowIcon className="size-4 mt-1 text-gray-400" />
        </button>

        <h2>Amazon product price</h2>

        <button>
          <InfoIcon className="size-[17px] text-gray-500 mt-1" />
        </button>
      </span>

      {/* Right side items ============================== */}
      <div className="flex items-center gap-6">
        <span className="flex gap-3 items-center bg-tertiaryBg rounded-full p-1.5 px-2.5">
          <CreditIcon className="size-[15px] text-yellow" />

          <p className="flex gap-1 items-center text-sm font-medium">
            Credit usage: 1018 / <InfiniteIcon className="size-5" />
          </p>
        </span>

        <NotificationIcon className="size-6 text-gray-500 cursor-pointer" />

        <img
          src="https://randomuser.me/api/portraits/women/67.jpg"
          className="size-10 rounded-full object-right object-cover"
        />
      </div>
    </div>
  );
}

export default Topbar;
