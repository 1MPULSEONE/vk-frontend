import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '../lib/utils';

const buttonVariants = cva(
  "inline-flex items-center font-500 max-w-[16.75rem] justify-center gap-2 whitespace-nowrap rounded-12 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-primary-foreground",
        secondary: 'bg-gray-500 text-black-500',
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-7 py-1.5 px-2.5  px-3 rounded-[0.5625rem]",
        lg: "h-12 rounded-[1rem] p-4",
        icon: "h-10 w-10",
      },
      disabled: {
          true: "cursor-not-allowed opacity-[0.36]",
          false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      disabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  contentGroupClassName?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const ProgressIndicator = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Shimmer = () => (
  <div
    className="absolute inset-y-0 left-0 w-1/3 bg-current opacity-[0.12]"
    style={{
      animation: "shimmer 1s linear infinite",
    }}
  />
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, asChild = false, children, contentGroupClassName, isLoading = false, disabled = false,  ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);

    const handlePointerDown = () => {
      if (!disabled) {
        setIsPressed(true);
      }
    };

    const handlePointerUp = () => {
      if (!disabled) {
        setIsPressed(false);
      }
    };

    const isDisabled = disabled || isLoading;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className, disabled: isDisabled }),
          "group items-center justify-between",
          isPressed && !isDisabled ? "scale-[0.95] transition-transform duration-[500ms] ease-[cubic-bezier(0,-0.3,0.5,1.3)]" : "",
        )}
        ref={ref}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        disabled={isDisabled}
        onClick={onClick}
        {...props}
      >
        {isLoading && (
          <>
            <ProgressIndicator />
            <Shimmer />
          </>
        )}
        {isPressed && !isDisabled && (
          <span
            className="absolute inset-0 bg-current opacity-[0.20] transition-transform duration-[500ms] ease-[cubic-bezier(0,-0.3,0.5,1.3)] rounded-12"
            style={{
              transform: 'scale(5)'
            }}
          />
        )}
       {<span className={cn(contentGroupClassName, isLoading ? "opacity-0" : "opacity-100", !isDisabled ? "group-hover:scale-[1.05] group-hover:transition-transform group-hover:duration-[500ms] group-hover:ease-[cubic-bezier(0,-0.3,0.5,1.3)]" : "")}>
          {children}
        </span>}
        <span></span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
