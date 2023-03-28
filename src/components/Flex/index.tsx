import { CSSProperties } from "@mui/styled-engine";
import { styled } from "@mui/system";
import React from "react";

interface indexProps {
  children: React.ReactNode;
  justify?: "center" | "space-between" | "space-around" | "space-evenly" | "flex-start" | "flex-end";
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  gap?: string;
  direction?: "row" | "column";
  aos?: string;
  margin?: string;
  padding?: string;
  width?: string;
  style?: CSSProperties;
  background?: string;
  borderRadius?: string;
}

const FlexWrapper = styled("div")(() => ({
  width: "100%",
}));

export const Flex: React.FC<indexProps> = ({
  children,
  justify,
  align,
  gap,
  direction,
  aos,
  margin,
  padding,
  background,
  width,
  borderRadius,
}) => {
  return (
    <FlexWrapper
      style={{
        margin: margin,
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexDirection: direction,
        background: background,
        width: width,
        overflow: "hidden",
        borderRadius: borderRadius,
        padding: padding,
      }}
      data-aos={aos}
    >
      {children}
    </FlexWrapper>
  );
};
export default Flex;
