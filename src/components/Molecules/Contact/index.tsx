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
import { useScreenResolution } from "@/hooks/useScreenResolution";
import { useRouter } from "next/router";
interface indexProps {}

export const Contact: React.FC<indexProps> = ({}) => {
  const { isMobile } = useScreenResolution();
  const router = useRouter();
  return (
    <Section id="contact">
      <Section
        styles={{
          width: "85%",
          margin: "10rem auto",
          background: "white",
          borderRadius: isMobile ? "3.2rem" : "64px",
        }}
      >
        <Flex
          align="flex-start"
          gap={isMobile ? "0" : "6rem"}
          padding={isMobile ? "3rem" : "6rem"}
          direction={isMobile ? "column" : "row"}
        >
          <Section styles={{ width: isMobile ? "100%" : "50%" }} aos="fade-up">
            <Text
              type="h1"
              fontSize={isMobile ? "3.2rem" : "5.6rem"}
              color="#161616"
              text="Contact us"
              weight="700"
            />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              styles={{ margin: "2.5rem 0", lineHeight: "3rem" }}
              text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem".slice(
                0,
                120
              )}
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
              fontSize={isMobile ? "1.6rem" : "2rem"}
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
            <Flex gap="1rem" align="center" margin=".5rem 0 4rem">
              <Image
                src={instagram}
                alt=""
                style={{ filter: "brightness(0)" }}
              />
              <Image
                src={facebook}
                alt=""
                style={{ filter: "brightness(0)" }}
              />
              <Image src={youtube} alt="" style={{ filter: "brightness(0)" }} />
            </Flex>
          </Section>
          <Section styles={{ width: isMobile ? "100%" : "50%" }} aos="fade-up">
            <Text
              type="h1"
              fontSize={isMobile ? "3.2rem" : "5.6rem"}
              color="#161616"
              text="Drop a message"
              weight="700"
            />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              text="Your email address will not be published."
              styles={{ margin: "2rem 0 0" }}
            />
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              text="Required fields are marked *"
              styles={{ margin: ".5rem 0 2rem" }}
            />

            <form>
              <Flex
                gap="2rem"
                align="flex-start"
                margin="2rem 0"
                direction={isMobile ? "column" : "row"}
              >
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
                width={isMobile ? "100%" : "196px"}
                height="50px"
                onSubmit={() => {
                  router.push("/#contact");
                }}
              />
            </form>
          </Section>
        </Flex>
        <Section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126076.60549455645!2d7.261415016406246!3d9.073427900000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4ce735ee95%3A0x6b62cf6341ea5d9b!2sNigerian%20Police%20Headquarters%2C%20Louis%20Edet%20House!5e0!3m2!1sen!2sng!4v1680033308887!5m2!1sen!2sng"
            width="100%"
            height="400"
            // style="border:0;"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: "0",
              borderRadius: `0 0 ${isMobile ? "32px 32px" : "64px 64px"}`,
            }}
          ></iframe>
        </Section>
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
    display: "flex",
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
