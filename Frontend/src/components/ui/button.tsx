import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden transform-gpu",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-brand hover:shadow-glow hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 hover:brightness-110",
        destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:brightness-105",
        outline: "border-2 border-brand-cyan text-brand-cyan bg-background hover:bg-brand-cyan hover:text-white hover:shadow-brand hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-colors duration-400",
        secondary: "bg-gradient-to-r from-secondary to-muted text-secondary-foreground hover:shadow-elegant hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:brightness-105",
        ghost: "text-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-blue hover:scale-[1.02] hover:shadow-sm active:scale-[0.98] backdrop-blur-sm",
        link: "text-brand-cyan underline-offset-4 hover:underline hover:text-brand-blue hover:scale-[1.01] transition-all duration-300",
        premium: "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-premium hover:shadow-glow hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:brightness-105 hover:saturate-110",
        vibrant: "bg-gradient-to-r from-brand-cyan to-brand-orange text-white shadow-brand hover:shadow-glow hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:brightness-105 hover:saturate-110",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-xl",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-10 text-lg font-bold",
        xl: "h-16 rounded-2xl px-12 text-xl font-bold",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
