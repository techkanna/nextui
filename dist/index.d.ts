import React from 'react';

type ButtonVariant = "solid" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button };
export type { ButtonProps, ButtonSize, ButtonVariant };
