import Section from "@/components/Section";
import Text from "@/components/Text";
import Applayout from "@/layout/AppLayout";
import { styled } from "@mui/system";
import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import accounting from "@/assets/images/accounting.svg";
import credit from "@/assets/images/credit.svg";
import tax from "@/assets/images/tax.svg";
import attachment from "@/assets/images/attachment.svg";
import image from "@/assets/images/image.jpg";
import popp from "@/assets/images/popp.jpg";
import trash from "@/assets/images/trash.jpg";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
interface indexProps {}

function UploadedImage() {
  const [hover, setHover] = useState(false);
  return (
    <ImageWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <Image src={image} alt="" width={150} height="150" className="uploaded" />
      {hover && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "35%",
            width: "50px",
            height: "50px",
            background: "white",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={trash} alt="" width={30} height={30} />
        </div>
      )}
    </ImageWrapper>
  );
}

const ImageWrapper = styled("div")<{ hover: boolean }>(({ hover }) => ({
  width: "150px",
  cursor: "pointer",
  "& .uploaded": {
    opacity: hover ? 0.5 : 1,
  },
  position: "relative",
}));

export const NewDropoff: React.FC<indexProps> = ({}) => {
  const [phase, setPhase] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const types = [
    {
      name: "Accounting Service",
      description: "we provide tailored comprehensive accounting solutions",
      icon: accounting,
    },
    {
      name: "Tax Service",
      description: "Personal and businesses tax preparation services",
      icon: tax,
    },
    {
      name: "Credit repair",
      description:
        "Credit repair services designed to help you improve your credit score",
      icon: credit,
    },
  ];
  const [selectedTypes, setSelectedTypes] = useState(types[0].name);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
      router.push("/drop-off");
  };
  function submitFile() {
    console.log("submitted");
    handleOpen();
  }
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    borderRadius: "30px",
    boxShadow: 24,
    p: 4,
    width: "750px",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6rem 0",
  };
  return (
    <Applayout titleTag="Create new drop-off - Ellietax ">
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            fontSize="large"
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              cursor: "pointer",
            }}
          />
          <Image src={popp} alt="" width={257} />
          <Text
            text="Submitted successfully"
            type="h2"
            fontSize="4rem"
            weight="600"
          />
          <Text
            text="Our commitment to integrity, professionalism, and customer satisfaction means that you can trust us to handle your taxes with the utmost care and confidentiality."
            type="p"
            fontSize="2rem"
            weight="400"
            color="#494949"
            styles={{
              marginTop: "2rem",
              textAlign: "center",
              lineHeight: "3rem",
              width: "80%",
            }}
          />

          <div style={{ display: "flex", alignItems:'center',margin:'2rem 0' }}>
            <QueryBuilderIcon />
            <Text
              text="Response time: less than 24hrs"
              type="p"
              fontSize="1.6rem"
              weight="800"
              color="#494949"
              styles={{ marginLeft: "1rem" }}
            />
          </div>
        </Box>
      </Modal>
      <DropoffTypeWrapper>
        <Section
          styles={{
            width: "45vw",
            maxWidth: "620px",
            margin: "7rem auto",
          }}
        >
          <Text
            text="Quickly Drop-Off"
            type="h2"
            fontSize="5.6rem"
            weight="600"
            styles={{ paddingTop: "1rem" }}
          />
          <Text
            type="p"
            text="Trust us to handle your fianances with care and precision, so you can focus on what matters most to you."
            color="#494949"
            fontSize="2rem"
            styles={{ marginTop: "3rem", lineHeight: "3rem" }}
          />

          {phase === 0 ? (
            <DropoffTypes>
              {types.map((type, index) => (
                <DropoffType
                  key={index}
                  border={
                    selectedTypes.includes(type.name)
                      ? "2px solid #4E7AEF"
                      : "1px solid #E5E5E580"
                  }
                  onClick={() => setSelectedTypes(type.name)}
                >
                  <Image src={type.icon} width="70" height="70" alt="" />
                  <Section>
                    <Text
                      text={type.name}
                      type="h3"
                      fontSize="2rem"
                      weight="600"
                      styles={{ marginBottom: "1rem" }}
                    />
                    <Text
                      text={type.description}
                      type="p"
                      fontSize="1.6rem"
                      weight="400"
                      styles={{ width: "80%" }}
                    />
                  </Section>
                </DropoffType>
              ))}
            </DropoffTypes>
          ) : (
            <UploadDropoffs>
              <Text
                text="Upload documents"
                type="h2"
                fontSize="2rem"
                weight="600"
                styles={{ paddingTop: "1rem" }}
              />
              <UploadArea>
                <Section>
                  <Image src={attachment} width="50" height="50" alt="" />
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: "400",
                      color: "#494949",
                      margin: "1.2rem 0",
                    }}
                  >
                    <span style={{ color: "#4E7AEF" }}> Upload a file </span> or
                    drag and drop
                  </p>
                  <Text
                    text="PNG, JPG, PDF, GIF up to 10MB"
                    type="p"
                    fontSize="1.6rem"
                    weight="400"
                  />
                </Section>
              </UploadArea>
              <Flex gap="2rem">
                {Array.from({ length: 4 }).map((_, index) => (
                  <UploadedImage key={index} />
                ))}
              </Flex>
            </UploadDropoffs>
          )}
        </Section>
        <Divider />
        <Section styles={{ width: "20%" }}>
          <Flex align="center">
            <Flex align="center">
              <KeyboardArrowLeftIcon />
              <Text
                text="Back"
                type="p"
                fontSize="2rem"
                weight="500"
                styles={{ paddingLeft: "1rem", cursor: "pointer" }}
                onClick={() =>
                  phase === 0 ? router.push("/drop-off") : setPhase(0)
                }
              />
            </Flex>
            <Button
              text={phase === 0 ? "Next" : "Submit file"}
              background="#4E7AEF"
              width="283px"
              height="50px"
              onSubmit={() => (phase === 0 ? setPhase(1) : submitFile())}
            />
          </Flex>
        </Section>
      </DropoffTypeWrapper>
    </Applayout>
  );
};

const DropoffTypeWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  alignItems: "center",
  height: "100vh",
}));

const Divider = styled("div")(() => ({
  width: "100%",
  height: "1px",
  background: "#E5E5E5",
  margin: "2rem 0 7rem 0",
}));

const DropoffTypes = styled("div")(() => ({
  margin: "7rem 0 1rem 0",
}));
const DropoffType = styled("div")<{ border: string }>(({ border }) => ({
  display: "flex",
  alignItems: "center",
  gap: "3rem",
  align: "center",
  margin: "3rem 0",
  cursor: "pointer",
  padding: "2rem",
  border: border,
  borderRadius: "10px",
  //   transition: "all 0.3s ease-in-out",
  maxWidth: "500px",
}));

const UploadDropoffs = styled("div")(() => ({
  margin: "7rem 0 1rem 0",
}));

const UploadArea = styled("div")(() => ({
  width: "100%",
  height: "250px",
  background: "transparent",
  margin: "3rem 0",
  borderRadius: "16px",
  border: "2px dashed #E7E7E7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",
}));

export default NewDropoff;
