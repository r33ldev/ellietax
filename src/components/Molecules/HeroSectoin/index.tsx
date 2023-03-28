import Flex from "@/components/Flex";
import Section from "@/components/Section";
import { styled } from "@mui/system";
import Image from "next/image";
import React from "react";
import heroMap from "@/assets/images/hero-map.png";
import { BoxProps } from "@mui/material";
import EllieLogo from "@/assets/images/ellietax-logo.png";
import HeroTextIcon from "@/components/icons/HeroText";
import Text from "@/components/Text";
import Button from "@/components/Button";
import whatsappIcon from "@/assets/images/whatsapp-white.svg";
import { useScreenResolution } from "@/hooks/useScreenResolution";
interface indexProps {}

export const HeroSection: React.FC<indexProps> = ({}) => {
  const navItems = [
    {
      name: "",
      link: "/",
      icon: EllieLogo,
    },
    {
      name: "Accounting Service",
      link: "#accounting-service",
    },
    {
      name: "Tax Service",
      link: "#tax-service",
    },
    {
      name: "Credit repair",
      link: "#credit-repair",
    },
    {
      name: "Drop-off",
      link: "#drop-off",
    },
  ];
  const { width } = useScreenResolution();
  return (
    <Flex justify="space-between" background="white">
      <Section styles={{ width: "65%" }}>
        <Section
          styles={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}
        >
          <Header>
            {navItems.map((item, index) => (
              <HeaderItem key={index}>
                {item.icon && <Image src={item.icon} alt="" />}
                {item.name}
              </HeaderItem>
            ))}
          </Header>
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

const Header = styled("nav")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const HeaderItem = styled("div")(() => ({
  fontSize: "1.8rem",
  fontWeight: 500,
  color: "#161616",
  cursor: "pointer",
  "& img": {
    width: "100px",
    height: "21px",
    marginRight: "2rem",
  },
}));

const Jumbotron = styled("div")(() => ({
  paddingTop: "12rem",
  width: "90%",
}));
