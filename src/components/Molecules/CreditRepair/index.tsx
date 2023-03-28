import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Text from "@/components/Text";
import React from "react";
import repair from "@/assets/images/credit-repair.svg";
import Image from "next/image";
interface indexProps {}

export const CreditRepair: React.FC<indexProps> = ({}) => {
  return (
    <Section>
      <Section styles={{ width: "85%", margin: "10rem auto" }}>
        <Section styles={{ margin: "2rem 0", width: "80%" }}>
          <Text
            type="h1"
            fontSize="5.6rem"
            color="#161616"
            text="Credit repair"
            weight="700"
          />
          <Text
            type="p"
            fontSize="2rem"
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
            padding: "6rem",
          }}
        >
          <Flex gap="3rem">
            <Image src={repair} alt="credit repair" width="100" height="100" />
            <Section>
              <Text
                type="p"
                fontSize="2rem"
                color="#494949"
                styles={{ lineHeight: "3rem" }}
                text="At Ellie Tax Inc, we understand that poor credit can significantly hinder your financial growth and success. That's why we offer comprehensive credit repair services designed to help you improve your credit score and regain control of your finances."
              />

              <Text
                type="p"
                fontSize="2rem"
                color="#494949"
                styles={{ marginTop: "2rem", lineHeight: "3rem" }}
                text=" Our team of experienced credit repair specialists will work with you to develop a personalized plan tailored to your unique situation. We'll analyze your credit reports to identify any errors, inaccuracies, or fraudulent accounts and dispute them on your behalf. We'll also provide guidance on how to build positive credit and develop responsible financial habits to ensure long-term success."
              />
            </Section>
          </Flex>
        </Section>
      </Section>
    </Section>
  );
};
export default CreditRepair;
