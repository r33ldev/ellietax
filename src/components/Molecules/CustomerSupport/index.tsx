import support from '@/assets/images/customer-support.png';
import whatsappIcon from "@/assets/images/whatsapp-white.svg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import CustomerSupportIcon from '@/components/icons/SupportText';
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
interface indexProps {}

export const CustomerSupport: React.FC<indexProps> = ({}) => {
  return (
    <Section>
      <Section
        styles={{
          width: "85%",
          margin: "10rem auto",
          background: "white",
          borderRadius: "64px",
        }}
      >
        <Flex align="center" gap="6rem">
          <Image
            src={support}
            alt="customer support"
            style={{
              width: "40%",
              height: "100%",
              maxWidth: "495px",
            }}
          />
          <Section styles={{ width: "50%" }}>
            <CustomerSupportIcon />
            <Text
              type="p"
              fontSize="2rem"
              color="#494949"
              styles={{ marginTop: "2rem", lineHeight: "3rem" }}
              text="A full-service accounting firm in midtown Manhattan, our seasoned certified public accountants will remove your financial pain points with accounting services that make managing your money easier. We have the essential tools you need to track expenses, monitor cash flow, and identify financial trends so you can plan for the future of your business"
            />
            <Flex gap="3rem" margin="3rem 0">
              <Button
                text="Quick message"
                background="#4E7AEF"
                addon={whatsappIcon}
                width="265px"
                height="50px"
              />
              <Button
                text="Contact us"
                color="#4E7AEF"
                background="transparent"
                border="1px solid #4E7AEF"
                width="196px"
                height="50px"
              />
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
export default CustomerSupport;
