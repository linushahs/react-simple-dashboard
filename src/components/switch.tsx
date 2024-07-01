import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { twMerge } from "tailwind-merge";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={twMerge(
      "peer relative inline-flex h-[25px] w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-300",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={twMerge(
        "pointer-events-none block size-[18px] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
      )}
    />

    {/* <p className="text-sm text-white font-medium absolute right-2 transition-opacity duration-200 data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100">
      OFF
    </p>
    <p className="text-sm text-white font-medium absolute left-2 transition-opacity duration-200 data-[state=unchecked]:opacity-0 data-[state=checked]:opacity-100">
      ON
    </p> */}
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
