import support from "@/assets/images/customer-support.png";
import whatsappIcon from "@/assets/images/whatsapp-white.svg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import {
  CustomerSupportIcon,
  CustomerSupportIconMobile,
} from "@/components/icons/SupportText";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Image from "next/image";
import React from "react";
interface indexProps {}

export const CustomerSupport: React.FC<indexProps> = ({}) => {
  const { isMobile } = useScreenResolution();
  return (
    <Section>
      <Section
        styles={{
          width: "85%",
          margin: "10rem auto",
          background: "white",
          borderRadius: isMobile ? "32px" : "64px",
        }}
      >
        <Flex
          align="center"
          gap={isMobile ? "0rem" : "6rem"}
          direction={isMobile ? "column" : "row"}
        >
          <Image
            src={support}
            alt="customer support"
            style={{
              width: isMobile ? "100%" : "40%",
              height: "100%",
              maxWidth: "495px",
            }}
          />
          <Section
            styles={{
              width: isMobile ? "100%" : "50%",
              padding: isMobile ? "3rem" : 0,
            }}
          >
            {isMobile ? <CustomerSupportIconMobile /> : <CustomerSupportIcon />}
            <Text
              type="p"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              color="#494949"
              styles={{ marginTop: "2rem", lineHeight: "3rem" }}
              text="A full-service accounting firm in midtown Manhattan, our seasoned certified public accountants will remove your financial pain points with accounting services that make managing your money easier. We have the essential tools you need to track expenses, monitor cash flow, and identify financial trends so you can plan for the future of your business"
            />
            <Flex
              gap="3rem"
              margin="3rem 0"
              direction={isMobile ? "column" : "row"}
            >
              <Button
                text="Quick message"
                background="#4E7AEF"
                addon={whatsappIcon}
                width={isMobile ? "100%" : "265px"}
                height="50px"
                onSubmit={() =>
                  window.open(
                    "https://web.whatsapp.com/send?phone=+1 929-688-3459&text=",
                    "_blank"
                  )
                }
              />
              <Button
                text="Contact us"
                color="#4E7AEF"
                background="transparent"
                border="1px solid #4E7AEF"
                width={isMobile ? "100%" : "196px"}
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
