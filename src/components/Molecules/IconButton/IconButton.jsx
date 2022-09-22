import React from "react";
import Button from "../../Atoms/Button.style";
import  Star from "../../../assets/icons/Star";
import { IconButtonStyle } from "./IconButton.style";

function IconButton({ icon, children }) {
  return (
    <IconButtonStyle>
      <div className="icon">
        <Star />
      </div>
      <div className="button-wrapper">
        <Button icon type="button">{children}</Button>
      </div>
    </IconButtonStyle>
  );
}

export default IconButton;
