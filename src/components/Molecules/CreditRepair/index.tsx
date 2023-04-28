import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Text from "@/components/Text";
import React from "react";
import repair from "@/assets/images/credit-repair.svg";
import Image from "next/image";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Button from "@/components/Button";
import { useRouter } from "next/router";
interface indexProps {}

export const CreditRepair: React.FC<indexProps> = ({}) => {
  const { isMobile } = useScreenResolution();
  const router = useRouter();
  return (
    <Section id={!isMobile ? "credit-repair" : ""} aos='fade-up'>
      <Section styles={{ width: "85%", margin: "10rem auto" }}>
        <Section
          styles={{ margin: "2rem 0", width: isMobile ? "100%" : "80%" }}
        >
          <Flex gap="1rem" align="flex-start">
            <Text
              type="h1"
              fontSize={isMobile ? "3.2rem" : "5.6rem"}
              color="#161616"
              text="Credit repair"
              weight="700"
            />
            <p
              style={{
                background: "#90AEFF",
                borderRadius: "1.5rem",
                padding: ".7rem 2rem",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              New
            </p>
          </Flex>
          <Text
            type="p"
            fontSize={isMobile ? "1.6rem" : "2rem"}
            color="#494949"
            styles={{ margin: "2.5rem 0", lineHeight: "3rem" }}
            text="Take control of your credit score with our credit repair services. Our team of experts will work with you to identify and resolve any credit issues, helping you to achieve financial freedom."
          />
        </Section>
        <Section
          styles={{
            background: "white",
            borderRadius: "3.2rem",
            marginTop: "4rem",
            padding: isMobile ? "3rem" : "6rem",
          }}
        >
          <Flex gap="3rem" direction={isMobile ? "column" : "row"}>
            <Image src={repair} alt="credit repair" width="100" height="100" />
            <Section>
              <Text
                type="p"
                fontSize={isMobile ? "1.6rem" : "2rem"}
                color="#494949"
                styles={{ lineHeight: "3rem" }}
                text="At Ellie Tax Inc, we understand that poor credit can significantly hinder your financial growth and success. That's why we offer comprehensive credit repair services designed to help you improve your credit score and regain control of your finances."
              />

              <Text
                type="p"
                fontSize={isMobile ? "1.6rem" : "2rem"}
                color="#494949"
                styles={{ marginTop: "2rem", lineHeight: "3rem" }}
                text=" Our team of experienced credit repair specialists will work with you to develop a personalized plan tailored to your unique situation. We'll analyze your credit reports to identify any errors, inaccuracies, or fraudulent accounts and dispute them on your behalf. We'll also provide guidance on how to build positive credit and develop responsible financial habits to ensure long-term success."
              />
              {isMobile && (
                <Button
                  text="Get started"
                  color="#4E7AEF"
                  background="transparent"
                  border="1px solid #4E7AEF"
                  width="196px"
                  height="50px"
                  styles={{ margin: "3rem 0 2rem 0" }}
                  onSubmit={() => {
                    router.push("/auth/sign-in");
                  }}
                />
              )}
            </Section>
          </Flex>
        </Section>
      </Section>
    </Section>
  );
};
export default CreditRepair;
