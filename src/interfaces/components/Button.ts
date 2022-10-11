import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: "default" | "white" | "none";
  color?: "white" | "black";
  fullWidth?: boolean;
  widthSize?: "sm" | "md" | "lg";
}

export interface IButtonStyles {
  background: "default" | "white" | "none";
  color: "white" | "black";
  fullWidth?: boolean;
  widthSize: "sm" | "md" | "lg";
}