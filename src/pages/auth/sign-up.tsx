import popp from "@/assets/images/popp.jpg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { COUNTRY_CODES } from "@/data";
import Applayout from "@/layout/AppLayout";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = ({}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.push("/my-dropoffs");
  };
  function register() {
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
    padding: "3rem 0",
  };
  return (
    <Applayout titleTag="Sign-in to Ellietax">
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
            text="Created successfully"
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
      </Modal>
      <div>
        <Section styles={{ width: "80%", margin: "3rem auto" }}>
          <HeaderNav page="auth" />

          <Section styles={{ width: "50%", margin: "6rem auto" }}>
            <Text
              text="Create an account"
              type="h2"
              fontSize="5rem"
              weight="600"
              styles={{ paddingTop: "1rem" }}
            />
            <p
              style={{
                fontSize: "2rem",
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
                fontSize="20px"
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
                fontSize="20px"
                weight="600"
                styles={{ margin: "4rem 0 2rem" }}
              />
              <CustomInput>
                <select name="code" id="code" value={"+234"}>
                  {COUNTRY_CODES.map((code) => (
                    <option key={code.dial_code} value={code.dial_code}>
                      {code.dial_code}
                    </option>
                  ))}
                </select>
                <input
                  style={{
                    width: "510px",
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
                fontSize="20px"
                weight="600"
                styles={{ margin: "4rem 0 2rem" }}
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
                width="240px"
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
