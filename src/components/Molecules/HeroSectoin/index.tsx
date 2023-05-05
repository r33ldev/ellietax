import heroMap from "@/assets/images/hero-map.png";
import heroMapMobile from "@/assets/images/heroMapMobile.svg";
import whatsappIcon from "@/assets/images/whatsapp-white.svg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import { HeroTextIcon, HeroTextIconMobile } from "@/components/icons/HeroText";
import heroText from "@/assets/images/heroText.svg";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import { styled } from "@mui/system";
import Image from "next/image";
import React from "react";
import HeaderNav from "../Header/HeaderNav";
import { useRouter } from "next/router";

interface indexProps { }

export const HeroSection: React.FC<indexProps> = ({ }) => {
  const { width, isMobile } = useScreenResolution();
  const router = useRouter();
  return (
    <Flex
      justify="space-between"
      background="white"
      id="hero-section"
      direction={isMobile ? "column" : "row"}
    >
      <Section styles={{ width: isMobile ? "100%" : "65%" }} aos='fade-up'>
        <Section
          styles={{
            width: isMobile ? "100%" : "80%",
            margin: "0 auto",
            paddingTop: isMobile ? "1.5rem" : "3rem",
          }}
        >
          <HeaderNav isMobile={isMobile} />
          <Jumbotron isMobile={isMobile}>
            {isMobile ? (
              <Image
                src={heroText}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            ) : (
              <HeroTextIcon width="100%" height="173" vw={width} />
            )}
            <Text
              type="p"
              text="Secure your small business finances with our expert financial services. From bookkeeping to tax preparation, we'll help you stay on track and grow your business. Contact us today for a consultation!"
              color="#494949"
              fontSize={isMobile ? "1.7rem" : "2rem"}
              styles={{ marginTop: "3rem", lineHeight: "3rem" }}
            />
            <Flex gap="3rem" margin="3rem 0">
              <Button
                text="Quick message"
                background="#4E7AEF"
                addon={whatsappIcon}
                width={isMobile ? "183px" : "265px"}
                height={isMobile ? "45px" : "50px"}
                onSubmit={() =>
                  window.open(
                    "https://web.whatsapp.com/send?phone=+1 929-688-3459&text=",
                    "_blank"
                  )
                }
              />
              <Button
                text="Contact us"
                color="#4E7AEF"
                background="transparent"
                border="1px solid #4E7AEF"
                width={isMobile ? "118px" : "196px"}
                height={isMobile ? "45px" : "50px"}
                onSubmit={() => {
                  router.push("/#contact");
                }}
              />
            </Flex>
          </Jumbotron>
        </Section>
      </Section>
      <HeroImage isMobile={isMobile}>
        <Image src={isMobile ? heroMapMobile : heroMap} alt="" />
      </HeroImage>
    </Flex>
  );
};
export default HeroSection;

const HeroImage = styled("div")<{ isMobile: boolean }>(({ isMobile }) => ({
  height: isMobile ? "auto" : "800px",
  width: isMobile ? "100%" : "35%",
  marginTop: isMobile ? "2rem" : "0",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    maxHeight: isMobile && "460px",
  },
}));

const Jumbotron = styled("div")<{ isMobile: boolean }>(({ isMobile }) => ({
  margin: isMobile ? "0 auto" : "0",
  marginTop: isMobile ? "3rem" : "11rem",
  width: "90%",
}));

// const ServiceItem = styled("p")(() => ({
//   fontSize: "1.8rem",
//   fontWeight: 500,
// }));
