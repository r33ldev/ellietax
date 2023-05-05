import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Applayout from "@/layout/AppLayout";
import Image from "next/image";
import React from "react";
import hands from "@/assets/images/dropoff-hands.jpg";
import handsMobile from "@/assets/images/handsMobile.png";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Footer from "@/components/Molecules/Footer";
interface indexProps { }

const HandShakeImage = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Section
      styles={{
        width: isMobile ? "90%" : "35%",
        position: "relative",
        ...(isMobile && {
          alignSelf: "flex-end",
          paddingBottom: "3rem",
          marginTop: "-5rem",
        }),
      }}
    >
      {!isMobile && <ColorCut />}
      <Image
        src={isMobile ? handsMobile : hands}
        alt=""
        width="513"
        height={isMobile ? "500" : 950}
        style={{
          width: "100%",
          paddingTop: "6vh",
          position: "relative",
          zIndex: 1,
        }}
      />
    </Section>
  );
};

export const DropoffPage: React.FC<indexProps> = ({ }) => {
  const { isMobile, width } = useScreenResolution();
  console.log('width: ', width, isMobile)
  const router = useRouter();
  return (
    <Applayout titleTag="Create new drop-off - Ellietax ">
      <Section styles={{ height: "100vh", background: "white" }}>
        <Wrapper isMobile={isMobile}>
          <Section styles={{ width: isMobile ? "100%" : "65%" }}>
            <Section
              styles={{
                width: isMobile ? "100%" : "80%",
                margin: "0 auto",
                paddingTop: isMobile ? "1.5rem" : "3rem",
              }}
            >
              <HeaderNav isMobile={isMobile} />
              <Flex
                justify="space-between"
                direction="column"
                gap={isMobile ? "0rem" : "5rem"}
              >
                <Section
                  styles={{
                    padding: `${isMobile ? "3rem" : "10rem"} 0 5rem 0`,
                    width: isMobile ? "85%" : "90%",
                    margin: "0 auto",
                  }}
                >
                  <Text
                    text="File with Ellietax "
                    type="h2"
                    fontSize={isMobile ? "4rem" : "5.6rem"}
                    weight="600"
                  />
                  <Text
                    text="Drop-off "
                    type="h2"
                    fontSize={isMobile ? "4rem" : "5.6rem"}
                    weight="600"
                    styles={{ paddingTop: "1rem" }}
                  />
                  <Text
                    type="p"
                    text="Stay on top of your finances with our expert accounting services. From bookkeeping to financial reporting, we'll help you make informed decisions and achieve your business goals"
                    color="#494949"
                    fontSize={isMobile ? "1.6rem" : "2rem"}
                    styles={{ marginTop: "3rem", lineHeight: "3rem" }}
                  />
                  <Button
                    text="Proceed to drop-off"
                    background="#4E7AEF"
                    width={isMobile ? "179px" : "283px"}
                    height={isMobile ? "47px" : "50px"}
                    styles={{ marginTop: "4rem" }}
                    onSubmit={() => {
                      router.push("/drop-off/new");
                    }}
                  />
                </Section>
                {isMobile && <HandShakeImage isMobile={isMobile} />}
                <FlexWrapper isMobile={isMobile}>
                  <Text
                    type="p"
                    text="Can’t stay? Drop off and go."
                    color="#161616"
                    fontSize="3.2rem"
                    weight="600"
                    styles={{ lineHeight: "4rem" }}
                  />
                  <Text
                    type="p"
                    text="Stay on top of your finances with our expert accounting services. From bookkeeping to financial reporting, we'll help you make informed decisions and achieve your business goals"
                    color="#494949"
                    fontSize={isMobile ? "1.6rem" : "2rem"}
                    styles={{ marginTop: "3rem", lineHeight: "3rem" }}
                  />
                </FlexWrapper>
              </Flex>
            </Section>
          </Section>
          {isMobile ? <Footer /> : <HandShakeImage isMobile={isMobile} />}
        </Wrapper>
      </Section>
    </Applayout>
  );
};

const Wrapper = styled("div")<{ isMobile: boolean }>(({ isMobile }) => ({
  height: "100vh",
  //   background: "red",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: isMobile ? "column" : "row",
}));
const FlexWrapper = styled("div")<{ isMobile: boolean }>(({ isMobile }) => ({
  background: "#F9F9F9",
  borderRadius: `${isMobile ? "22px" : "32px 32px 0px 0px"}`,
  height: isMobile ? "auto" : "34rem",
  padding: isMobile ? "3rem" : "5rem ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: isMobile ? "85%" : "100%",
  ...(isMobile && { alignSelf: "center" }),
}));

const ColorCut = styled("div")(({ }) => ({
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