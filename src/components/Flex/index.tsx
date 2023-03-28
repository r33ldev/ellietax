import { CSSProperties } from "@mui/styled-engine";
import { styled } from "@mui/system";
import React from "react";

interface indexProps {
  children: React.ReactNode;
  justify?: "center" | "space-between" | "space-around" | "space-evenly";
  align?: "center" | "flex-start" | "flex-end";
  gap?: string;
  direction?: "row" | "column";
  aos?: string;
  margin?: string;
  width?: string;
  style?: CSSProperties;
  background?: string;
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
  background,
  width,
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
      }}
      data-aos={aos}
    >
      {children}
    </FlexWrapper>
  );
};
export default Flex;
