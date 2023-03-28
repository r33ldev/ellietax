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
interface indexProps {}

export const Footer: React.FC<indexProps> = ({}) => {
  return (
    <Section styles={{ background: "white" }}>
      <Section
        styles={{ width: "80%", margin: "0 auto", padding: "10rem 0 0" }}
      >
        <Flex gap="3rem" align="flex-start">
          <Section styles={{ width: "33%" }}>
            <Image src={EllieLogo} alt="" width="67" height="86" />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
              styles={{ margin: "2rem 0", lineHeight: "3rem", width: "80%" }}
            />
          </Section>

          <Section styles={{ width: "33%" }}>
            <Text
              type="h1"
              fontSize="3.2rem"
              color="#161616"
              text="Get in touch"
              weight="700"
            />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
              styles={{ margin: "2rem 0", lineHeight: "3rem", width: "80%" }}
            />
          </Section>
          <Section styles={{ width: "33%" }}>
            <Text
              type="h1"
              fontSize="3.2rem"
              color="#161616"
              text="Get in touch"
              weight="700"
            />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              styles={{ margin: "1rem 0 .5rem", lineHeight: "3rem" }}
              text="desk@ellietax.com"
            />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              styles={{ margin: ".5rem 0", lineHeight: "3rem" }}
              text="917-745-3172"
            />
            <FilteredFooterImages>
              <Image src={instagram} alt="" style={{cursor:'pointer'}} />
              <Image src={facebook} alt="" />
              <Image src={youtube} alt="" />
            </FilteredFooterImages>
          </Section>
        </Flex>
        <Section
          styles={{ borderTop: "1px solid #e5e5e580", marginTop: "2rem" }}
        >
          <Flex justify="space-between" width="100%">
            <Text
              type="p"
              fontSize="1.6rem"
              color="#494949"
              text="Copyright © 2022-2023 EllieTax. All Rights Reserved."
              styles={{ margin: "2rem 0", width: "80%" }}
            />
            <Flex justify="flex-end" gap="3rem">
              <Text
                type="p"
                fontSize="1.6rem"
                color="#494949"
                styles={{ margin: "1rem 0 .5rem", cursor: "pointer" }}
                text="Terms"
                weight="700"
              />
              <Text
                type="p"
                fontSize="1.6rem"
                color="#494949"
                styles={{ margin: "1rem 0 .5rem", cursor: "pointer" }}
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
  "& img": {
    zIndex: 100,
    position: "relative",
    cursor: "pointer",
    filter: "brightness(0.5) contrast(1.2) hue-rotate(180deg)",
  },
});

export default Footer;
