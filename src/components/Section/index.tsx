import { useScreenResolution } from "@/hooks/useScreenResolution";
import { styled } from "@mui/system";
import React from "react";

interface indexProps {
  children: React.ReactNode;
  id?: string;
  styles?: React.CSSProperties;
  aos?: string;
}

export const Section: React.FC<indexProps> = ({
  children,
  id,
  styles,
  aos,
}) => {
  const {isMobile} = useScreenResolution()
  return (
    <SectionWrapper id={id} style={{ ...styles }} data-aos={ aos} >
      {children}
    </SectionWrapper>
  );
};
export default Section;

const SectionWrapper = styled("section")(() => ({
  //   width: "100%",
  //   height: "100%",
}));
