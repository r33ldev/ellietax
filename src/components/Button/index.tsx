import { useScreenResolution } from "@/hooks/useScreenResolution";
import { Button as MuiButton } from "@mui/material";
import { Property } from "csstype";
import Image from "next/image";
import React, { CSSProperties } from "react";

interface ButtonProps {
  text: string;
  color?: string;
  background?: string;
  addon?: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  textTransform?: Property.TextTransform | undefined;
  border?: string;
  fontFamily?: string;
  aos?: object;
  styles?: CSSProperties;
}
const Button: React.FC<ButtonProps> = ({
  text,
  color,
  background,
  addon,
  onSubmit,
  width,
  height,
  fontSize,
  textTransform = "initial",
  border,
  borderRadius,
  fontFamily,
  aos,
  styles,
}) => {
  const {isMobile} = useScreenResolution()
  fontSize = isMobile ? "1.4rem" : fontSize
  const Btnstyles = {
    background: background,
    color: color || "#fff",
    width: width || "245px",
    height: height || "56px",
    fontSize: fontSize || "2rem",

    borderRadius: borderRadius || "28px",
    paddding: "0 6rem",

    border: border || "none",
    ...styles,
  };
  return (
    <MuiButton
      {...aos}
      style={{ ...Btnstyles, whiteSpace: "nowrap" }}
      onClick={onSubmit}
    >
      {addon && (
        <Image src={addon} alt="" style={{ paddingRight: "10px" }} width="30" />
      )}
      <span
        style={{
          textTransform: textTransform,
          fontFamily: fontFamily || "Avenir",
          fontWeight: "500",
        }}
      >
        {text}
      </span>
    </MuiButton>
  );
};

export default Button;
