import EllieLogo from "@/assets/images/ellietax-logo.png";
import heroMap from "@/assets/images/hero-map.png";
import whatsappIcon from "@/assets/images/whatsapp-white.svg";
import Button from "@/components/Button";
import { Button as MuiButton } from "@mui/material";
import Flex from "@/components/Flex";
import HeroTextIcon from "@/components/icons/HeroText";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BoxProps } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface indexProps {}

export const HeroSection: React.FC<indexProps> = ({}) => {
  const navItems = [
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
  ];
  const { width } = useScreenResolution();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Flex justify="space-between" background="white" id="hero-section">
      <Section styles={{ width: "65%" }}>
        <Section
          styles={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}
        >
          <Header>
            <HeaderItem onClick={() => router.push("/")}>
              <Image src={EllieLogo} alt="" />
            </HeaderItem>
            <HeaderItem onClick={handleClick}>
              Services we offer{" "}
              {open ? (
                <ExpandLessIcon
                  sx={{
                    color: "#161616",
                    marginLeft: ".5rem",
                  }}
                  fontSize="large"
                />
              ) : (
                <ExpandMoreIcon
                  sx={{
                    color: "#161616",
                    marginLeft: ".5rem",
                  }}
                  fontSize="large"
                />
              )}
              <ServiceMenu open={open}>
                {navItems.map((item, idx) => (
                  <HeaderItem
                    key={idx}
                    onClick={() => router.push(`${item.link}`)}
                  >
                    {item.name}
                  </HeaderItem>
                ))}
              </ServiceMenu>
            </HeaderItem>
            <HeaderItem> Drop-off</HeaderItem>
            <HeaderItem> Sign-in</HeaderItem>
            {/* <HeaderItem> */}
            <Button
              text="Log-out"
              background="#4E7AEF"
              width="165px"
              height="47px"
            />
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
const HeaderItem = styled(MuiButton)(() => ({
  fontSize: "1.8rem",
  fontWeight: 500,
  color: "#161616",
  cursor: "pointer",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  textTransform: "unset",
  fontFamily: "Avenir, sans-serif",
  position: "relative",
  "& img": {
    width: "100px",
    height: "21px",
    marginRight: "3rem",
  },

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const Jumbotron = styled("div")(() => ({
  paddingTop: "12rem",
  width: "90%",
}));

const ServiceMenu = styled("div")<{ open: boolean }>(({ open }) => ({
  display: open ? "block" : "none",
  position: "absolute",
  top: "100%",
  left: 0,
  width: "286px",
  backgroundColor: "white",
  boxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  WebkitBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  MozBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  borderRadius: "10px",
  padding: "1rem",
}));

// const ServiceItem = styled("p")(() => ({
//   fontSize: "1.8rem",
//   fontWeight: 500,
// }));
