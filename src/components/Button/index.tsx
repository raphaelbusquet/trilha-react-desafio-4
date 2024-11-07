import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, type = "button" }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} type={type}>{title}</ButtonContainer>;
};


export default Button;
