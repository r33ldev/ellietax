import heroMap from "@/assets/images/hero-map.png";
import whatsappIcon from "@/assets/images/whatsapp-white.svg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import HeroTextIcon from "@/components/icons/HeroText";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import { BoxProps } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import React from "react";
import HeaderNav from "../Header/HeaderNav";

interface indexProps {}

export const HeroSection: React.FC<indexProps> = ({}) => {
  const { width } = useScreenResolution();

  return (
    <Flex justify="space-between" background="white" id="hero-section">
      <Section styles={{ width: "65%" }}>
        <Section
          styles={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}
        >
          <HeaderNav />
          <Jumbotron>
            <HeroTextIcon width="100%" height="173" vw={width} />
            <Text
              type="p"
              text="Secure your small business finances with our expert financial services. From bookkeeping to tax preparation, we'll help you stay on track and grow your business. Contact us today for a consultation!"
              color="#494949"
              fontSize="2rem"
              styles={{ marginTop: "3rem", lineHeight: "3rem" }}
            />
            <Flex gap="3rem" margin="3rem 0">
              <Button
                text="Quick message"
                background="#4E7AEF"
                addon={whatsappIcon}
                width="265px"
                height="50px"
              />
              <Button
                text="Contact us"
                color="#4E7AEF"
                background="transparent"
                border="1px solid #4E7AEF"
                width="196px"
                height="50px"
              />
            </Flex>
          </Jumbotron>
        </Section>
      </Section>
      <HeroImage width="35%">
        <Image src={heroMap} alt="" />
      </HeroImage>
    </Flex>
  );
};
export default HeroSection;

const HeroImage = styled("div", {
  shouldForwardProp: (prop) => prop !== "width",
})<BoxProps & { width: string }>(({ width }) => ({
  height: "80vh",
  maxHeight: "800px",
  minHeight: "700px",
  width: width,

  "& img": {
    width: "100%",
    height: "100%",
  },
}));

const Jumbotron = styled("div")(() => ({
  paddingTop: "12rem",
  width: "90%",
}));

// const ServiceItem = styled("p")(() => ({
//   fontSize: "1.8rem",
//   fontWeight: 500,
// }));
