import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import styles from "~/styles/animation.module.css"; 

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full relative font-500 max-min-w-fit",
  {
    variants: {
      variant: {
        primary: "bg-green-500 text-white",
        secondary: "bg-gray-500 text-black",
      },
      size: {
        8: "h-[8px] min-w-[8px] text-[4px] text-[0rem]",
        12: "h-[12px] min-w-[12px] text-[6px] text-[0rem]",
        16: "h-[16px] min-w-[16px] text-[8px] px-1 text-11",
        20: "h-[20px] min-w-[20px] text-[10px] px-1 text-13",
        24: "h-[24px] min-w-[24px] text-[12px] px-2 text-15",
      },
      stroke: {
        true: "border border-solid",
        false: "",
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 20,
      stroke: false,
    },
  }
);

export interface NotificationBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  quantity: number | string;
  strokeType?: "dynamic" | "surface" | "base" | "secondary";
  pulse?: boolean;
}

const getStrokeColor = (strokeType: "dynamic" | "surface" | "base" | "secondary") => {
  switch (strokeType) {
    case "surface":
      return "#FFF";
    case "base":
      return "#000";
    case "secondary":
      return "#888";
    case "dynamic":
    default:
      return "#fff";
  }
};

const NotificationBadge = React.forwardRef<HTMLDivElement, NotificationBadgeProps>(
  (
    {
      className,
      variant,
      size,
      stroke,
      strokeType = "dynamic",
      quantity,
      pulse = false,
      ...props
    },
    ref
  ) => {
    let displayQuantity: string = "";
    if (typeof quantity === "number") {
      displayQuantity = quantity > 99 ? "99+" : quantity.toString();
    } else {
      displayQuantity = quantity.length > 3 ? quantity.slice(0, 3) : quantity;
    }

    const borderThickness = stroke ? Math.ceil(Number(size) / 8) : 0;

    const inlineStyle = stroke
      ? {
          borderWidth: borderThickness,
          borderColor: getStrokeColor(strokeType),
        }
      : {};

    const isSmallSize = size === 8 || size === 12;
    const showText = !isSmallSize;

    const pulseColor = variant === 'primary' ? "rgba(47, 182, 117, 0.5) " :  "rgba(236, 231, 234, 0.5)"  ;

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, stroke, className }), {
          "min-w-[var(--size)]": displayQuantity.length === 1,
        })}
        style={{
          ...inlineStyle,
        }}
        {...props}
      >
        {showText && displayQuantity}
        {pulse && isSmallSize && (
          <div className={styles["live-indicator"]}>
            <div className={styles["red-dot"]} style={{ backgroundColor: pulseColor }} />
            <div
              className={`${styles["pulse"]} ${styles["one"]}`}
              style={{ backgroundColor: pulseColor }}
            />
            <div
              className={`${styles["pulse"]} ${styles["two"]}`}
              style={{ backgroundColor: pulseColor }}
            />
          </div>
        )}
      </div>
    );
  }
);

NotificationBadge.displayName = "NotificationBadge";

export { NotificationBadge, badgeVariants };