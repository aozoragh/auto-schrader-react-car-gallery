import { FC } from "react";
import { ButtonContainer } from "./style";

type ButtonProps = {
  label?: string;
  // icon?: string;
};

const Button: FC<ButtonProps> = ({ label }) => {
  return <ButtonContainer>{label}</ButtonContainer>;
};

export default Button;
