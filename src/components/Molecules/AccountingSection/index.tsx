import consulting from "@/assets/images/consulting.svg";
import home from "@/assets/images/home.svg";
import payroll from "@/assets/images/payroll.svg";
import scriptorium from "@/assets/images/scriptorium.svg";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
interface indexProps {}

export const AccountingSection: React.FC<indexProps> = ({}) => {
  const accountingItems = [
    {
      title: "Small business accounting services",
      description:
        "Ellie Tax Inc offers expert small business accounting services to help business owners manage their finances more efficiently. We understand that managing a small business can be challenging, especially when it comes to keeping track of your finances, and that’s why we provide comprehensive accounting solutions tailored to your specific needs.",
      icon: home,
    },
    {
      title: "Business incorporation services",
      description:
        "At Ellie Tax, we provide professional and affordable Business Incorporation Services for entrepreneurs looking to start a new business. Our experienced team of incorporation specialists will work with you to determine the most appropriate business structure for your needs, whether it is a Limited Liability Company (LLC), Corporation, Partnership, or Sole Proprietorship.",
      icon: scriptorium,
    },
    {
      title: "Payroll services",
      description:
        "Ellie Tax Inc offers comprehensive payroll services that help streamline payroll processing and ensure compliance with tax laws. We understand the complexities of payroll and can help you manage everything from employee compensation to payroll taxes, and benefits administration. Our team of experienced professionals will handle your payroll tasks, so you can focus on growing your business",
      icon: payroll,
    },
    {
      title: "Business consulting services",
      description:
        "Ellie Tax Inc offers comprehensive business consulting services to help businesses grow and achieve their goals. Our experienced team of professionals offers customized solutions to address the unique needs and challenges of each business. We help businesses navigate complex issues such as financial management, strategic planning, risk management, and compliance.",
      icon: consulting,
    },
  ];
  const { isMobile, width } = useScreenResolution();
  const router = useRouter();
  return (
    <Section aos='fade-up'  >
      <Section styles={{ width: "85%", margin: "1rem auto " }}>
        <Section
          styles={{ margin: "2rem 0", width: isMobile ? "100%" : "80%" }}
        >
          <Text
            type="h1"
            fontSize={isMobile ? "3.2rem" : "5.6rem"}
            color="#161616"
            text="Accounting Services"
            weight="700"
            styles={{ lineHeight: "4rem", width: "70%" }}
          />
          <Text
            type="p"
            fontSize={isMobile ? "1.6rem" : "2rem"}
            color="#494949"
            styles={{ margin: "2.5rem 0", lineHeight: "3rem" }}
            text="Stay on top of your finances with our expert accounting services. From bookkeeping to financial reporting, we'll help you make informed decisions and achieve your business goals"
          />
        </Section>
        <Section
          styles={{
            display: "grid",
            gridTemplateColumns: width <= 770 ? "1fr" : "repeat(2, 1fr)",
            background: "white",
            borderRadius: "3.2rem",
            marginTop: "4rem",
          }}
        >
          {accountingItems.map((item, index) => (
            <Section
              key={index}
              styles={{
                borderBottom: "1px solid #E5E5E570",
                borderLeft: `1px solid ${
                  [1, 3].includes(index) ? "#e5e5e570" : "transparent"
                }`,
              }}
            >
              <Section
                styles={{
                  padding: isMobile ? "3rem 2rem 0" : "3rem 6rem 3rem",
                  width: "100%",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width="80"
                  height={100}
                />
                <Text
                  type="h3"
                  fontSize={isMobile ? "2.4rem" : "3.2rem"}
                  color="#161616"
                  text={item.title}
                  weight="700"
                  styles={{ margin: "2rem 0" }}
                />
                <Text
                  type="p"
                  fontSize="1.6rem"
                  color="#494949"
                  text={item.description}
                  styles={{ lineHeight: "2.4rem", width: "95%" }}
                />
                <Button
                  text="Get started"
                  color="#4E7AEF"
                  background="transparent"
                  border="1px solid #4E7AEF"
                  width="196px"
                  height="50px"
                  styles={{ margin: "3rem 0 5rem 0" }}
                  onSubmit={() => {
                    router.push("/auth/sign-in");
                  }}
                />
              </Section>
            </Section>
          ))}
        </Section>
        {isMobile && <span id="tax-service"></span>}
      </Section>
    </Section>
  );
};

export default AccountingSection;
