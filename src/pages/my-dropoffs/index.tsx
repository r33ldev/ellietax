import Button from "@/components/Button";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Applayout from "@/layout/AppLayout";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import attachment from "@/assets/images/attachment-recent.svg";
import Image from "next/image";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Flex from "@/components/Flex";

interface indexProps {}

export const MyDropoffs: React.FC<indexProps> = ({}) => {
  const router = useRouter();
  return (
    <Applayout titleTag="My dropoffs - Ellietax">
      <div>
        <Section styles={{ width: "80%", margin: "3rem auto" }}>
          <HeaderNav isMobile/>
          <Section
            styles={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "5rem 0",
            }}
          >
            <Text
              text="My drop-off"
              type="h2"
              fontSize="5.6rem"
              weight="600"
              styles={{ paddingTop: "1rem" }}
            />
            <Text
              type="p"
              text="Find all your documents uploaded to us quickly and easily."
              color="#494949"
              fontSize="2rem"
              styles={{ margin: "2rem 0", lineHeight: "3rem" }}
            />
            <Button
              text="Make new drop-off"
              color="#4E7AEF"
              background="transparent"
              border="1px solid #4E7AEF"
              width="276px"
              height="56px"
              onSubmit={() => router.push("/drop-off/new")}
            />
            <Section styles={{ width: "70%", margin: "6rem 0" }}>
              <Text
                text="Recent drop-off"
                type="h2"
                fontSize="3.2rem"
                weight="600"
                styles={{ paddingTop: "1rem" }}
              />
              <RecentItem
              // key={index}
              >
                <Flex align="center" gap="3rem">
                  <Image src={attachment} width="56" height="56" alt="" />
                  <Section>
                    <Text
                      text={"Accounting service"}
                      type="h3"
                      fontSize="2.4rem"
                      weight="600"
                      styles={{ marginBottom: "1.2rem" }}
                    />
                    <Flex align="center">
                      <QueryBuilderIcon fontSize="large" />
                      <Text
                        text={"Awaiting review"}
                        type="p"
                        fontSize="2rem"
                        weight="400"
                        styles={{ fontStyle: "italic", marginLeft: "1rem" }}
                      />
                    </Flex>
                  </Section>
                </Flex>
                <Section>
                  <Text
                    text={"Edit documents"}
                    type="p"
                    fontSize="2rem"
                    weight="500"
                    color="#4E7AEF"
                    styles={{ whiteSpace: "nowrap", cursor: "pointer" }}
                    onClick={() => router.push("/drop-off/1")}
                  />
                  <Text
                    text="Apr 23th, 2023"
                    type="p"
                    fontSize="1.6rem"
                    weight="500"
                    styles={{ whiteSpace: "nowrap", marginTop: "1rem" }}
                  />
                </Section>
              </RecentItem>
              <RecentItem
              // key={index}
              >
                <Flex align="center" gap="3rem">
                  <Image src={attachment} width="56" height="56" alt="" />
                  <Section>
                    <Text
                      text={"Tax return"}
                      type="h3"
                      fontSize="2.4rem"
                      weight="600"
                      styles={{ marginBottom: "1.2rem" }}
                    />
                    <Flex align="center">
                      <QueryBuilderIcon fontSize="large" />
                      <Text
                        text={"Awaiting review"}
                        type="p"
                        fontSize="2rem"
                        weight="400"
                        styles={{ fontStyle: "italic", marginLeft: "1rem" }}
                      />
                    </Flex>
                  </Section>
                </Flex>
                <Section>
                  <Text
                    text={"Edit documents"}
                    type="p"
                    fontSize="2rem"
                    weight="500"
                    color="#4E7AEF"
                    styles={{ whiteSpace: "nowrap", cursor: "pointer" }}
                    onClick={() => router.push("/drop-off/2")}
                  />
                  <Text
                    text="Apr 23th, 2023"
                    type="p"
                    fontSize="1.6rem"
                    weight="500"
                    styles={{ whiteSpace: "nowrap", marginTop: "1rem" }}
                  />
                </Section>
              </RecentItem>
              <RecentItem
              // key={index}
              >
                <Flex align="center" gap="3rem">
                  <Image src={attachment} width="56" height="56" alt="" />
                  <Section>
                    <Text
                      text={"Credit repair"}
                      type="h3"
                      fontSize="2.4rem"
                      weight="600"
                      styles={{ marginBottom: "1.2rem" }}
                    />
                    <Flex align="center">
                      <QueryBuilderIcon fontSize="large" />
                      <Text
                        text={"Awaiting review"}
                        type="p"
                        fontSize="2rem"
                        weight="400"
                        styles={{ fontStyle: "italic", marginLeft: "1rem" }}
                      />
                    </Flex>
                  </Section>
                </Flex>
                <Section>
                  <Text
                    text={"Edit documents"}
                    type="p"
                    fontSize="2rem"
                    weight="500"
                    color="#4E7AEF"
                    styles={{ whiteSpace: "nowrap", cursor: "pointer" }}
                    onClick={() => router.push("/drop-off/3")}
                  />
                  <Text
                    text="Apr 23th, 2023"
                    type="p"
                    fontSize="1.6rem"
                    weight="500"
                    styles={{ whiteSpace: "nowrap", marginTop: "1rem" }}
                  />
                </Section>
              </RecentItem>
            </Section>
          </Section>
        </Section>
      </div>
    </Applayout>
  );
};

const RecentItem = styled("div")<{ border?: string }>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "3rem",
  align: "center",
  margin: "3rem 0",
  padding: "3rem",
  border: "1px solid #E5E5E580",
  borderRadius: "10px",
  //   maxWidth: "500px",
}));

export default MyDropoffs;
