import React, { forwardRef } from "react";
import clsx from "clsx";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<ButtonVariant, string> = {
  solid: "bg-black text-white hover:bg-black/90",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
  ghost: "text-gray-900 hover:bg-gray-100",
  link: "text-blue-600 underline-offset-4 hover:underline bg-transparent p-0 h-auto"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "solid", size = "md", isLoading = false, className, children, disabled, ...props },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    return (
      <button
        ref={ref}
        className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        disabled={isDisabled}
        data-testid="button"
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span className="sr-only">Loading</span>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

