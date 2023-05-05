import attachment from "@/assets/images/attachment.svg";
import image from "@/assets/images/image.jpg";
import popp from "@/assets/images/popp.jpg";
import trash from "@/assets/images/trash.jpg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Applayout from "@/layout/AppLayout";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";
import { Popup } from "antd-mobile";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
interface indexProps {}

function UploadedImage() {
  const [hover, setHover] = useState(false);
  return (
    <ImageWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <Image
        src={image}
        alt=""
        height="150"
        className="uploaded"
        style={{
          width: "100%",
        }}
      />
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
  // width: "150px",
  cursor: "pointer",
  "& .uploaded": {
    opacity: hover ? 0.5 : 1,
  },
  position: "relative",
}));

const ModalContent = ({
  style,
  handleClose,
  isMobile,
}: {
  style: any;
  handleClose: () => void;
  isMobile: boolean;
}) => {
  return (
    <Box sx={style}>
      {!isMobile && (
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
      )}
      <Image
        src={popp}
        alt=""
        width={257}
        style={{
          margin: "2rem 0",
        }}
      />
      <Text
        text="Updated successfully"
        type="h2"
        fontSize={isMobile ? "2.4rem" : "4rem"}
        weight="600"
      />
      <Text
        text="Our commitment to integrity, professionalism, and customer satisfaction means that you can trust us to handle your taxes with the utmost care and confidentiality."
        type="p"
        fontSize={isMobile ? "1.6rem" : "2rem"}
        weight="400"
        color="#494949"
        styles={{
          marginTop: "2rem",
          textAlign: "center",
          lineHeight: "3rem",
          width: "80%",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", margin: "2rem 0" }}>
        <QueryBuilderIcon />
        <Text
          text="Response time: less than 24hrs"
          type="p"
          fontSize={isMobile ? "1.4rem" : "1.6rem"}
          weight="800"
          color="#494949"
          styles={{ marginLeft: "1rem" }}
        />
      </div>
    </Box>
  );
};

export const NewDropoff: React.FC<indexProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.push("/my-dropoffs");
  };
  function updateDocument() {
    console.log("updated");
    handleOpen();
  }
  const style = {
    borderRadius: "30px",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Avenir, sans-serif",
  };
  const { isMobile } = useScreenResolution();
  return (
    <Applayout titleTag="Create new drop-off - Ellietax ">
      {isMobile ? (
        <Popup
          visible={open}
          onClose={handleClose}
          onMaskClick={handleClose}
          bodyStyle={{
            overflow: "scroll",
            borderRadius: "16px 16px 0px 0px",
            height: "70vh",
          }}
        >
          <Pad onClick={handleClose} />
          <ModalContent
            style={style}
            handleClose={handleClose}
            isMobile={isMobile}
          />
        </Popup>
      ) : (
        <Modal open={open} onClose={handleClose}>
          <ModalContent
            style={{
              ...style,
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              padding: "6rem 0",
              width: "750px",
            }}
            handleClose={handleClose}
            isMobile={isMobile}
          />
        </Modal>
      )}
      <DropoffTypeWrapper>
        {isMobile && <HeaderNav isMobile={isMobile} />}
        <Section
          styles={{
            width: isMobile ? "85%" : "45vw",
            maxWidth: "620px",
            margin: `${isMobile ? "1rem" : "7rem"} auto`,
          }}
        >
          <Text
            text="Documents"
            type="h2"
            fontSize={isMobile ? "4rem" : "5.6rem"}
            weight="600"
            styles={{ paddingTop: "1rem" }}
          />

          <UploadDropoffs>
            <Text
              text="Update documents"
              type="h2"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              weight="600"
              styles={{ paddingTop: "1rem" }}
            />
            <UploadArea isMobile={isMobile}>
              <Section>
                <Image src={attachment} width="50" height="50" alt="" />
                <p
                  style={{
                    fontSize: { isMobile } ? "1.6rem" : "2rem",
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
                  fontSize={isMobile ? "1.4rem" : "1.6rem"}
                  weight="400"
                />
              </Section>
            </UploadArea>
            <GridMan isMobile={isMobile}>
              {Array.from({ length: 4 }).map((_, index) => (
                <UploadedImage key={index} />
              ))}
            </GridMan>
          </UploadDropoffs>
        </Section>
        <div
          style={{
            width: "100%",
            ...(isMobile && {
              position: "fixed",
              bottom: 0,
              background: "white",
            }),
          }}
        >
          <Divider />
          <Flex
            align="center"
            gap="5rem"
            margin={`${isMobile ? 2 : 3}rem 0`}
            justify="center"
          >
            <Section>
              <Flex align="center">
                <KeyboardArrowLeftIcon />
                <Text
                  text="Back"
                  type="p"
                  fontSize="2rem"
                  weight="500"
                  styles={{ paddingLeft: "1rem", cursor: "pointer" }}
                  onClick={() => router.back()}
                />
              </Flex>
            </Section>
            <Button
              text={"Update documents"}
              background="#4E7AEF"
              width={isMobile ? "221px" : "283px"}
              height="50px"
              onSubmit={() => updateDocument()}
            />
          </Flex>
        </div>
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
  margin: "0 auto",
}));

const Divider = styled("div")(() => ({
  width: "100%",
  height: "1px",
  background: "#E5E5E5",
  // marginTop: "2rem",
  // paddingBottom: "7rem",
}));

const UploadDropoffs = styled("div")(() => ({
  margin: "2rem 0 1rem 0",
}));

const UploadArea = styled("div")<{ isMobile: boolean }>(({ isMobile }) => ({
  width: "100%",
  height: isMobile ? "184px" : "250px",
  background: "transparent",
  margin: `${isMobile ? 2 : 3}rem 0`,
  borderRadius: "16px",
  border: "2px dashed #E7E7E7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",
}));

const Pad = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      style={{
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <p
        style={{
          height: ".8rem",
          width: "15rem",
          backgroundColor: "#E7E7E7",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      ></p>
    </div>
  );
};

const GridMan = styled("div")<{ isMobile: boolean }>(({ isMobile }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, minmax(160px, 1fr))`,
  gridGap: "1.4rem",
  // overflow: "hidden",
}));
export default NewDropoff;
