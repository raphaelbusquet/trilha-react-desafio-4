export interface IButtonProps {
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled: boolean;
  }
  