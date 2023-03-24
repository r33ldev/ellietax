import { styled } from "@mui/system";
import React from "react";

interface indexProps {
  children: React.ReactNode;
  justify?: "center" | "space-between" | "space-around" | "space-evenly";
  align?: "center" | "flex-start" | "flex-end";
  gap?: string;
  direction? : 'row' | 'column',
  aos?: string,
  style?: object
}

const FlexWrapper = styled("div")(() => ({
  // display: "flex",
}));

export const Flex: React.FC<indexProps> = ({ children, justify, align, gap, direction, aos }) => {
  return (
    <FlexWrapper
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexDirection: direction
      }}
      data-aos={aos}
    >
      {children}
    </FlexWrapper>
  );
};
export default Flex;
