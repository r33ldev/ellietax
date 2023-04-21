import Button from "@/components/Button";
import Flex from "@/components/Flex";
import Input from "@/components/Input";
import HeaderNav from "@/components/Molecules/Header/HeaderNav";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Applayout from "@/layout/AppLayout";
import { useRouter } from "next/router";
import React from "react";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = ({}) => {
  const router = useRouter();
  return (
    <Applayout titleTag="Sign-in to Ellietax">
      <div>
        <Section styles={{ width: "80%", margin: "3rem auto" }}>
          <HeaderNav page="auth" isMobile />

          <Section styles={{ width: "50%", margin: "6rem auto" }}>
            <Text
              text="Please login"
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
              Dont have an account?{" "}
              <span
                style={{ color: "#4E7AEF", cursor: "pointer" }}
                onClick={() => router.push("/auth/sign-up")}
              >
                Sign up
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
              />
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
              />

              <Button
                text="Submit to login"
                background="#4E7AEF"
                border="1px solid #4E7AEF"
                width="240px"
                height="50px"
                styles={{ margin: "4rem 0" }}
                onSubmit={() => router.push("/my-dropoffs")}
              />
            </form>
          </Section>
        </Section>
      </div>
    </Applayout>
  );
};
export default SignIn;
