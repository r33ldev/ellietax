import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import EllieLogo from "@/assets/images/ellietax.png";
import Text from "@/components/Text";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";
import youtube from "@/assets/images/youtube.svg";
import { styled } from "@mui/system";
import { useScreenResolution } from "@/hooks/useScreenResolution";
interface indexProps {}

export const Footer: React.FC<indexProps> = ({}) => {
  const { isMobile } = useScreenResolution();
  return (
    <Section styles={{ background: "white" }} aos="fade-up">
      <Section
        styles={{
          width: "85%",
          margin: "0 auto",
          padding: `${isMobile ? 6 : 10}rem 0 0`,
        }}
      >
        <Flex
          gap="3rem"
          align="flex-start"
          direction={isMobile ? "column" : "row"}
        >
          <Section styles={{ width: isMobile ? "100%" : "33%" }}>
            <Image src={EllieLogo} alt="" width="67" height="86" />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
              styles={{
                margin: "2rem 0",
                lineHeight: "3rem",
                width: isMobile ? "100%" : "80%",
              }}
            />
          </Section>

          <Section styles={{ width: isMobile ? "100%" : "33%" }}>
            <Text
              type="h1"
              fontSize="3.2rem"
              color="#161616"
              text="Get in touch"
              weight="700"
            />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
              styles={{
                margin: "2rem 0",
                lineHeight: "3rem",
                width: isMobile ? "100%" : "80%",
              }}
            />
          </Section>
          <Section styles={{ width: isMobile ? "100%" : "33%" }}>
            <Text
              type="h1"
              fontSize="3.2rem"
              color="#161616"
              text="Get in touch"
              weight="700"
            />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              styles={{ margin: "1rem 0 .5rem", lineHeight: "3rem" }}
              text="desk@ellietax.com"
            />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              styles={{ margin: ".5rem 0", lineHeight: "3rem" }}
              text="917-745-3172"
            />
            <FilteredFooterImages>
              <span>
                <Image src={instagram} alt="" />
              </span>
              <span>
                <Image src={facebook} alt="" />
              </span>
              <span>
                <Image src={youtube} alt="" />
              </span>
            </FilteredFooterImages>
          </Section>
        </Flex>
        <Section
          styles={{ borderTop: "1px solid #e5e5e580", marginTop: "2rem" }}
        >
          <Flex
            justify="space-between"
            width="100%"
            direction={isMobile ? "column" : "row"}
            margin={isMobile ? "2rem 0 2rem" : "0"}
          >
            <Text
              type="p"
              fontSize={isMobile ? "1.2rem" : "1.6rem"}
              color="#494949"
              text="Copyright © 2022-2023 EllieTax. All Rights Reserved."
              styles={{
                margin: `${isMobile ? 0 : 2}rem 0`,
                width: isMobile ? "100%" : "80%",
              }}
            />
            <Flex
              justify={isMobile ? "flex-start" : "flex-end"}
              gap={isMobile ? "1rem" : "3rem"}
              margin="1rem 0 0"
            >
              <Text
                type="p"
                fontSize={isMobile ? "1.2rem" : "1.6rem"}
                color="#494949"
                styles={{
                  margin: isMobile ? "0" : "1rem 0 .5rem",
                  cursor: "pointer",
                }}
                text="Terms"
                weight="700"
              />
              <Text
                type="p"
                fontSize={isMobile ? "1.2rem" : "1.6rem"}
                color="#494949"
                styles={{
                  margin: isMobile ? "0" : "1rem 0 .5rem",
                  cursor: "pointer",
                }}
                text="Privacy Policy"
                weight="700"
              />
            </Flex>
          </Flex>
        </Section>
      </Section>
    </Section>
  );
};

const FilteredFooterImages = styled("div")({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  "& span": {
    cursor: "pointer",

    "& img": {
      filter: "brightness(0)",
    },
  },
});

export default Footer;
