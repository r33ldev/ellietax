import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";
import youtube from "@/assets/images/youtube.svg";
import Input, { TextArea } from "@/components/Input";
import Button from "@/components/Button";
import { styled } from "@mui/system";
interface indexProps {}

export const Contact: React.FC<indexProps> = ({}) => {
  return (
    <Section>
      <Section
        styles={{
          width: "85%",
          margin: "10rem auto",
          background: "white",
          borderRadius: "64px",
          padding: "6rem",
        }}
      >
        <Flex align="flex-start" gap="6rem">
          <Section styles={{ width: "50%" }}>
            <Text
              type="h1"
              fontSize="5.6rem"
              color="#161616"
              text="Contact us"
              weight="700"
            />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              styles={{ margin: "2.5rem 0", lineHeight: "3rem" }}
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem"
            />
            <Text
              type="h1"
              fontSize="3.2rem"
              color="#161616"
              text="Address"
              weight="700"
              styles={{ margin: "5rem 0 0" }}
            />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              styles={{ margin: "1.5rem 0", lineHeight: "3rem" }}
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
            />
            <Text
              type="h1"
              fontSize="3.2rem"
              color="#161616"
              text="Get in touch"
              weight="700"
              styles={{ margin: "5rem 0 0" }}
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
            <Flex gap="1rem" align="center">
              <Image src={instagram} alt="" />
              <Image src={facebook} alt="" />
              <Image src={youtube} alt="" />
            </Flex>
          </Section>
          <Section styles={{ width: "50%" }}>
            <Text
              type="h1"
              fontSize="5.6rem"
              color="#161616"
              text="Drop a message"
              weight="700"
            />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              text="Your email address will not be published. Required fields are marked *"
              styles={{ margin: "2rem 0" }}
            />

            <form>
              <Flex gap="2rem" align="flex-start" margin="2rem 0">
                <Input placeholder="Enter your name" />
                <Input placeholder="Enter your email" />
              </Flex>
              <TextArea padding="2rem" placeholder="Enter your message" />
              <RadioInput>
                <input
                  type="radio"
                  id="rdo1"
                  className="radio-input"
                  name="radio-group"
                />
                <label htmlFor="rdo1" className="radio-label">
                  <span className="radio-border" />
                  <span>
                    Get Ellie-tips to help you crush your financial goals{" "}
                  </span>
                </label>
              </RadioInput>
              <Button
                text="Contact us"
                background="#4E7AEF"
                border="1px solid #4E7AEF"
                width="196px"
                height="50px"
              />
            </form>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};

const RadioInput = styled("div")(() => ({
  margin: "3rem 0",

  ".radio-input": { display: "none" },
  ".radio-label": {
    position: "relative",
    paddingLeft: "35px",
    paddingTop: "2px",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  ".radio-label:after": {
    content: '""',
    display: "block",
    width: "12px",
    height: "12px",
    position: "absolute",
    left: "4px",
    top: "4px",
    borderRadius: "5px",
  },
  ".radio-border": {
    width: "20px",
    height: "20px",
    display: "inline-block",
    outline: "solid 3px #F8F8F8",
    background: "#F8F8F8",
    borderRadius: "2px",
    position: "absolute",
    left: "0px",
    top: "0px",
    cursor: "pointer",
  },
  ".radio-input:checked + .radio-label:after": {
    transition: "all 0.5s",
    backgroundColor: "#4E7AEF",
  },
}));

export default Contact;
