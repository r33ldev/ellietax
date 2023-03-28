import { styled } from "@mui/system";
import React from "react";

interface indexProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export const Section: React.FC<indexProps> = ({ children, styles }) => {
  return <SectionWrapper style={{ ...styles }}>{children}</SectionWrapper>;
};
export default Section;

const SectionWrapper = styled("section")(() => ({
  //   width: "100%",
  //   height: "100%",
}));
