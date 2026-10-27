import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "text" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors rounded-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bosque focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-40",
          {
            "bg-bosque text-white hover:bg-bosque-600 active:bg-bosque-700": variant === "primary",
            "bg-white text-carbon border border-gray-300 hover:bg-gray-50": variant === "secondary",
            "border border-gray-300 bg-transparent hover:bg-gray-50 text-carbon": variant === "outline",
            "hover:bg-gray-100 text-carbon": variant === "ghost",
            "text-bosque hover:text-bosque-600 hover:underline": variant === "text",
            "bg-extraordinario text-white hover:bg-extraordinario-dark": variant === "destructive",
          },
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-body": size === "md",
            "h-12 px-8 text-body-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
