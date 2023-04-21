import Flex from "@/components/Flex";
import Section from "@/components/Section";
import React from "react";
import accounting from "@/assets/images/accounting.svg";
import tax from "@/assets/images/tax.svg";
import creditRepair from "@/assets/images/credit-repair.svg";
import { styled } from "@mui/system";
import Image from "next/image";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
interface indexProps {}

export const ServiceBanner: React.FC<indexProps> = ({}) => {
  const bannerItems = [
    {
      title: "Accounting Service",
      description: "We provide tailored comprehensive accounting solutions",
      icon: accounting,
    },
    {
      title: "Tax Service",
      description:
        "Exceptional tax preparation services to individuals and businesses.",
      icon: tax,
    },
    {
      title: "Credit repair",
      description:
        "Credit repair services designed to help you improve your credit score",
      icon: creditRepair,
    },
  ];
  const { isMobile } = useScreenResolution();
  return (
    <Section
      styles={{
        margin: `${isMobile ? "-5rem" : "-12rem"} 0 0 0`,
        zIndex: "200",
        position: "relative",
      }}
    >
      <Section
        styles={{
          borderRadius: isMobile ? "32px" : "64px",
          background: "white",
          width: "85%",
          boxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
          WebkitBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
          MozBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
          margin: "0 auto",
        }}
      >
        <Flex justify="space-between" direction={isMobile ? "column" : "row"}>
          {bannerItems.map((item, index) => (
            <Section
              key={index}
              styles={{
                width: isMobile ? "100%" : "33.33%",
                textAlign: "center",
                margin: `4rem auto ${isMobile ? "1rem" : "4rem"}`,
                display: "flex",
                justifyContent: "center",
                ...(isMobile && { paddingBottom: "5rem" }),
                [!isMobile ? "borderRight" : index !== 2 ? "borderBottom" : ""]:
                  "1px solid #E5E5E570",
              }}
            >
              <BannerItem key={index}>
                <Image src={item.icon} alt="" />
                <Text
                  type="h2"
                  text={item.title}
                  color="#161616"
                  fontSize="2rem"
                  weight="800"
                />
                <Text
                  type="p"
                  text={item.description}
                  color="#494949"
                  fontSize="1.4rem"
                  styles={{ marginTop: isMobile ? "2rem" : "0", lineHeight: '2rem' }}
                />
              </BannerItem>
            </Section>
          ))}
        </Flex>
      </Section>
    </Section>
  );
};
const BannerItem = styled("div")(() => ({
  width: "70%",
  "&:not(:last-child)": {
    borderRight: "2px solid red",
  },

  "& img": {
    height: "75px",
    width: "75px",
    marginBottom: "1.6rem",
  },
  "& h2": {
    marginBottom: "1rem",
  },
}));

export default ServiceBanner;
