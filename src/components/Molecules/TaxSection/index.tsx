import preparation from "@/assets/images/tax-with-hand.svg";
import planning from "@/assets/images/tax-planning.svg";
import tax from "@/assets/images/tax-form.svg";
import taxservice from "@/assets/images/tax-service.svg";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import immigration from "@/assets/images/immigration-tax.svg";
import Flex from "@/components/Flex";
interface indexProps {}

export const TaxSection: React.FC<indexProps> = ({}) => {
  const taxItems = [
    {
      title: "Tax preparation service",
      description:
        "We take pride in our attention to detail and ensure that all forms and documents are accurately completed to avoid any potential IRS audits or overpaid taxes. Our team stays up-to-date with the latest changes in tax legislation, identifying opportunities to legally and effectively reduce taxes for our clients.",
      icon: preparation,
    },
    {
      title: "Tax planning",
      description:
        "Ellie Tax Inc offers comprehensive tax planning services to individuals and businesses in need of strategic tax advice. Our experienced team of tax experts is committed to creating personalized tax plans that help clients minimize their tax liability while maximizing their financial goals.",
      icon: planning,
    },
    {
      title: "IRS problem tax resoltion",
      description:
        "IRS tax problems can be overwhelming, stressful, and can even lead to legal issues if not handled correctly. At our IRS tax problem resolution services, we help individuals and businesses resolve their tax issues with the IRS. Our team of experienced tax professionals will work with you to identify the root of the problem, create a plan to resolve it, and negotiate with the IRS on your behalf.",
      icon: tax,
    },
    {
      title: "State and local tax service",
      description:
        "We provides comprehensive State and Local Tax (SALT) services to help businesses navigate the complex landscape of state and local taxes. Our experienced team of tax professionals specializes in identifying potential risks and opportunities for tax savings, ensuring that our clients are in compliance with all state and local tax laws, and helping them develop tax-efficient strategies.",
      icon: taxservice,
    },
  ];
  return (
    <Section>
      <Section styles={{ width: "85%", margin: "10rem auto" }}>
        <Section styles={{ margin: "2rem 0", width: "80%" }}>
          <Text
            type="h1"
            fontSize="5.6rem"
            color="#161616"
            text="Tax Services"
            weight="700"
          />
          <Text
            type="p"
            fontSize="2rem"
            color="#494949"
            styles={{ margin: "2.5rem 0", lineHeight: "3rem" }}
            text="Leave your taxes to us! Our professional tax services will help you file your taxes accurately and on time. With our expertise, you can maximize your deductions and minimize your tax liability."
          />
        </Section>
        <Section
          styles={{
            background: "white",
            borderRadius: "3.2rem",
            marginTop: "4rem",
          }}
        >
          <Section
            styles={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {taxItems.map((item, index) => (
              <Section
                key={index}
                styles={{
                  // display: "flex",
                  // alignItems: "center",
                  // padding: "2rem 0",
                  borderLeft: `1px solid ${
                    [1, 3].includes(index) ? "#e5e5e570" : "transparent"
                  }`,
                  borderBottom: "1px solid #E5E5E570",
                }}
              >
                <Section
                  styles={{
                    padding: "3rem 6rem 3rem",
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
                    fontSize="3.2rem"
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
                  />
                </Section>
              </Section>
            ))}
          </Section>
          <Section styles={{ padding: "6rem" }}>
            <Flex gap="2rem">
              <Image src={immigration} alt="" />
              <Section>
                <Text
                  type="h3"
                  fontSize="3.2rem"
                  color="#161616"
                  text="Immigration tax services"
                  weight="700"
                />
                <Text
                  type="p"
                  fontSize="1.6rem"
                  color="#494949"
                  text="Immigrant Tax Services provide specialized tax assistance to individuals who have immigrated to the United States. These services help immigrants navigate the complex U.S. tax system and ensure compliance with all tax laws and regulations. Immigrant Tax Services may also provide guidance on tax implications related to immigration status, including green cards, visas, and citizenship."
                  styles={{ lineHeight: "2.4rem", width: "95%" }}
                />
                <Button
                  text="Get started"
                  color="#4E7AEF"
                  background="transparent"
                  border="1px solid #4E7AEF"
                  width="196px"
                  height="50px"
                  styles={{ margin: "3rem 0 2rem 0" }}
                />
              </Section>
            </Flex>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default TaxSection;
