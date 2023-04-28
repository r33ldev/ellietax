import popp from "@/assets/images/popp.jpg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { COUNTRY_CODES } from "@/data";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Applayout from "@/layout/AppLayout";
import CloseIcon from "@mui/icons-material/Close";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Box, Modal } from "@mui/material";
import { styled } from "@mui/system";
import { Popup } from "antd-mobile";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = ({}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({ code: "+234", phone: "" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.push("/my-dropoffs");
  };
  function register() {
    console.log("submitted");
    handleOpen();
  }
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
          text="Created successfully"
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

        <Button
          text="Quickly Drop-off"
          background="#4E7AEF"
          border="1px solid #4E7AEF"
          width="240px"
          height="50px"
          styles={{ margin: "4rem 0" }}
          onSubmit={() => router.push("/drop-off/new")}
        />
      </Box>
    );
  };
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
    <Applayout titleTag="Sign-in to Ellietax">
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
      <div>
        <Section
          styles={{ width: isMobile ? "85%" : "80%", margin: "3rem auto" }}
        >
          <HeaderNav page="auth" isMobile={isMobile} />

          <Section
            styles={{ width: isMobile ? "100%" : "50%", margin: "6rem auto" }}
          >
            <Text
              text="Create an account"
              type="h2"
              fontSize={isMobile ? "3.8rem" : "5rem"}
              weight="600"
              styles={{ paddingTop: "1rem" }}
            />
            <p
              style={{
                fontSize: isMobile ? "1.6rem" : "2rem",
                fontWeight: "400",
                color: "#494949",
                margin: "2rem 0 5rem",
              }}
            >
              Have an account?{" "}
              <span
                style={{ color: "#4E7AEF", cursor: "pointer" }}
                onClick={() => router.push("/auth/sign-in")}
              >
                Sign in
              </span>
            </p>
            <form>
              <Text
                type="p"
                text="Email Address"
                fontSize={isMobile ? "1.6rem" : "2rem"}
                weight="600"
                styles={{ margin: "1.2rem 0" }}
              />
              <Input
                placeholder="Email"
                height="70px"
                br="15px"
                width="510px"
                fs="1.5rem"
              />
              <Text
                type="p"
                text="Phone Number"
                fontSize={isMobile ? "1.6rem" : "2rem"}
                weight="600"
                styles={{ margin: "2rem 0 2rem" }}
              />
              <CustomInput>
                <select
                  name="code"
                  id="code"
                  value={details.code}
                  onChange={(e) =>
                    setDetails({ ...details, code: e.target.value })
                  }
                >
                  {COUNTRY_CODES.map((code) => (
                    <option key={code.dial_code} value={code.dial_code}>
                      {code.dial_code}
                    </option>
                  ))}
                </select>
                <input
                  style={{
                    width: "440px",
                    height: "70px",
                    borderRadius: "0 15px 15px 0",
                    outline: "none",
                    border: "1px solid #E5E5E5",
                    borderLeft: "none",
                    padding: "1rem",
                    fontSize: "1.5rem",
                  }}
                  type="text"
                  placeholder="Phone number"
                />
              </CustomInput>
              <Text
                type="p"
                text="Password"
                fontSize={isMobile ? "1.6rem" : "2rem"}
                weight="600"
                styles={{ margin: "2rem 0 2rem" }}
              />
              <Input
                placeholder="password"
                height="70px"
                br="15px"
                width="510px"
                fs="1.5rem"
              />

              <Button
                text="Create account"
                background="#4E7AEF"
                border="1px solid #4E7AEF"
                width={isMobile ? "100%" : "240px"}
                height="50px"
                styles={{ margin: "4rem 0" }}
                onSubmit={register}
              />
            </form>
          </Section>
        </Section>
      </div>
    </Applayout>
  );
};

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

const CustomInput = styled("div")(() => ({
  display: "flex",
  "& select": {
    width: "70px",
    height: "70px",
    borderRadius: "15px 0 0 15px",
    outline: "none",
    border: "1px solid #E5E5E5",
    borderRight: "none",
    padding: "1rem",
  },
}));

export default SignIn;
