import React from "react";
import { ButtonWrapper } from "./style";

const Button = (props) => {
  const { style, onClick, children, disabled, type, className } = props;
  return (
    <ButtonWrapper
      style={style}
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children.toUpperCase()}
    </ButtonWrapper>
  );
};

export default Button;
