import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Applayout from "@/layout/AppLayout";
import Image from "next/image";
import React from "react";
import hands from "@/assets/images/dropoff-hands.jpg";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { styled } from "@mui/system";
interface indexProps {}

export const DropoffPage: React.FC<indexProps> = ({}) => {
  return (
    <Applayout titleTag="Create new drop-off - Ellietax ">
      <Section
        styles={{ height: "100vh", background: "white" }}
      >
        <Wrapper>
          <Section styles={{ width: "65%" }}>
            <Section
              styles={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}
            >
              <HeaderNav />

              <Flex justify="space-between" direction="column" gap="5rem">
                <Section
                  styles={{
                    padding: "10rem 0 5rem 0",
                    width: "90%",
                  }}
                >
                  <Text
                    text="File with Ellietax "
                    type="h2"
                    fontSize="5.6rem"
                    weight="600"
                  />
                  <Text
                    text="Drop-off "
                    type="h2"
                    fontSize="5.6rem"
                    weight="600"
                    styles={{ paddingTop: "1rem" }}
                  />
                  <Text
                    type="p"
                    text="Stay on top of your finances with our expert accounting services. From bookkeeping to financial reporting, we'll help you make informed decisions and achieve your business goals"
                    color="#494949"
                    fontSize="2rem"
                    styles={{ marginTop: "3rem", lineHeight: "3rem" }}
                  />
                  <Button
                    text="Proceed to drop-off"
                    background="#4E7AEF"
                    width="283px"
                    height="50px"
                    styles={{ marginTop: "4rem" }}
                    onSubmit={() => {}}
                  />
                </Section>
                <FlexWrapper>
                  <Text
                    type="p"
                    text="Can’t stay? Drop off and go."
                    color="#161616"
                    fontSize="3.2rem"
                    weight="600"
                    styles={{ lineHeight: "3rem" }}
                  />
                  <Text
                    type="p"
                    text="Stay on top of your finances with our expert accounting services. From bookkeeping to financial reporting, we'll help you make informed decisions and achieve your business goals"
                    color="#494949"
                    fontSize="2rem"
                    styles={{ marginTop: "3rem", lineHeight: "3rem" }}
                  />
                </FlexWrapper>
              </Flex>
            </Section>
          </Section>
          <Section styles={{ width: "35%", position: "relative" }}>
            <ColorCut />
            <Image
              src={hands}
              alt=""
              width="513"
              height={950}
              style={{
                width: "100%",
                paddingTop: "6vh",
                position: "relative",
                zIndex: 1,
              }}
            />
          </Section>
        </Wrapper>
      </Section>
    </Applayout>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  //   background: "red",
  display: "flex",
  justifyContent: "space-between",
}));
const FlexWrapper = styled("div")(({ theme }) => ({
  background: "#F9F9F9",
  borderRadius: "32px 32px 0px 0px",
  height: "34rem",
  padding: "5rem ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const ColorCut = styled("div")(({ theme }) => ({
  background: "#F9F9F9",
  height: "300px",
  width: "1009px",
  position: "absolute",
  top: "0",
  left: "-32px",
  borderRadius: "0px 0px 0px 32px",
    zIndex: 0,
}));

export default DropoffPage;
