import React from "react";
export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map