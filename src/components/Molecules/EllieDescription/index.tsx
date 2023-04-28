import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import womenImage from "@/assets/images/portrait-women.png";
import womenImageMb from "@/assets/images/portrait-women-mb.png";
import {
  EllieDescriptionIcon,
  EllieDescriptionIconMobile,
} from "@/components/icons/EllieDescription";
import Text from "@/components/Text";
import irsfile from "@/assets/images/irsfile.png";
import agent from "@/assets/images/agent.png";
import { useScreenResolution } from "@/hooks/useScreenResolution";
interface indexProps {}

export const EllieDescription: React.FC<indexProps> = ({}) => {
  const { isMobile } = useScreenResolution();
  return (
    <Section>
      <Section
        styles={{
          width: "85%",
          margin: "10rem auto 7rem",
          background: "white",
          borderRadius: isMobile ? "32px" : "64px",
        }}
      >
        <Flex
          align="center"
          gap={isMobile ? "3rem" : "6rem"}
          justify="space-between"
          direction={isMobile ? "column" : "row"}
        >
          <Section
            styles={{
              width: isMobile ? "100%" : "60%",
              padding: `${isMobile ? "5rem 2.5rem 0rem" : "0 5rem"}`,
            }}
          >
            {isMobile ? (
              <EllieDescriptionIconMobile />
            ) : (
              <EllieDescriptionIcon />
            )}
            <Text
              type="p"
              text="A full-service accounting firm in midtown Manhattan, our seasoned certified public accountants will remove your financial pain points with accounting services that make managing your money easier. We have the essential tools you need to track expenses, monitor cash flow, and identify financial trends so you can plan for the future of your business."
              color="#494949"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              styles={{
                marginTop: isMobile ? "2.5rem" : "1rem",
                lineHeight: "3rem",
              }}
            />
            <Flex gap={`${isMobile ? ".5rem" : "2rem"}`} margin="2rem 0">
              <Image
                src={irsfile}
                alt=""
                width={isMobile ? "100" : "150"}
                height="50"
                style={{ objectFit: "scale-down" }}
              />
              <Image
                style={{ objectFit: "scale-down" }}
                src={agent}
                alt=""
                width={isMobile ? "100" : "150"}
                height="50"
              />
            </Flex>
          </Section>
          <Image
            src={isMobile ? womenImageMb : womenImage}
            alt="customer support"
            style={{
              width: isMobile ? "100%" : "40%",
              height: "100%",
              maxWidth: "435px",
            }}
          />
        </Flex>
        {isMobile && <span id="accounting-service"></span>}
      </Section>
    </Section>
  );
};
export default EllieDescription;
