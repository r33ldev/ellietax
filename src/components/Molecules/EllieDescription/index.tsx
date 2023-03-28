import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import womenImage from "@/assets/images/portrait-women.png";
import EllieDescriptionIcon from "@/components/icons/EllieDescription";
import Text from "@/components/Text";
import irsfile from "@/assets/images/irsfile.png";
import agent from "@/assets/images/agent.png";
interface indexProps {}

export const EllieDescription: React.FC<indexProps> = ({}) => {
  return (
    <Section>
      <Flex
        width="85%"
        background="white"
        margin="10rem auto"
        borderRadius="64px"
        justify="space-between"
        // align="stretch"
        gap="3rem"
      >
        <Section styles={{ padding: "6rem" }}>
          <EllieDescriptionIcon />
          <Text
            type="p"
            text="A full-service accounting firm in midtown Manhattan, our seasoned certified public accountants will remove your financial pain points with accounting services that make managing your money easier. We have the essential tools you need to track expenses, monitor cash flow, and identify financial trends so you can plan for the future of your business."
            color="#494949"
            fontSize="2rem"
            styles={{ marginTop: "1rem", lineHeight: "3rem" }}
          />
          <Flex gap="2rem" margin="2rem 0">
            <Image src={irsfile} alt="" width="150" height="50" />
            <Image src={agent} alt="" width="150" height="50" />
          </Flex>
        </Section>
        <Section styles={{width:'45%', height:'auto'}}>
          <Image
            src={womenImage}
            alt=""
            width={490}
            //   height={600}
            style={{
                //   width: "550px",
            //   minHeight: "600px",
            //   height: "50%",
            }}
          />
        </Section>
      </Flex>
    </Section>
  );
};
export default EllieDescription;
