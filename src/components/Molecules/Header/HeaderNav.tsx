import Button from "@/components/Button";
import { styled } from "@mui/system";
import React, { useRef, useState } from "react";
import { Button as MuiButton, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EllieLogo from "@/assets/images/ellietax-logo.png";
import Flex from "@/components/Flex";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import moreIcon from "@/assets/images/more.png";
import rightArrow from "@/assets/images/right-arrow.png";

import { Divider, Popup } from "antd-mobile";
import Section from "@/components/Section";
import Text from "@/components/Text";

interface HeaderProps {
  page?: string;
  isMobile: boolean;
}
export const HeaderNav: React.FC<HeaderProps> = ({ page, isMobile }) => {
  const mobileHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    padding: "0 2rem",
    top: "0",
    left: "0",
    zIndex: 999,
    background: "white",
    height: "6rem",
    width: "100%",
    boxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  };
  const router = useRouter();
  const navItems = [
    {
      name: "Accounting Service",
      link: "#accounting-service",
    },
    {
      name: "Tax Service",
      link: "#tax-service",
    },
    {
      name: "Credit repair",
      link: "#credit-repair",
    },
  ];
  const [open, setOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const { width } = useScreenResolution();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <>
      <Popup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        onMaskClick={() => setPopupVisible(false)}
        bodyStyle={{
          overflow: "scroll",
          borderRadius: "16px 16px 0px 0px",
        }}
      >
        <Pad onClick={() => setPopupVisible(false)} />
        <Section styles={{ width: "85%", margin: "6rem auto" }}>
          <Text type="p" text="Services we offer" fontSize="1.6rem" />
          <Section styles={{ marginLeft: "2rem" }}>
            {navItems.map((item, index) => (
              <>
                <Divider />
                <Flex
                  key={index}
                  justify="space-between"
                  margin="2rem 0"
                  styles={{ cursor: "pointer" }}
                >
                  <Text
                    type="p"
                    text={item.name}
                    fontSize="1.6rem"
                    onClick={() => {
                      router.push(`/${item.link}`);
                      setPopupVisible(false);
                    }}
                  />
                  <Image src={rightArrow} alt="" width={20} />
                </Flex>
              </>
            ))}
          </Section>
          <Divider />
          <HeaderItem onClick={() => router.push("/drop-off")}>
            Drop-off
          </HeaderItem>
          <Divider />
          <HeaderItem onClick={() => router.push("/my-dropoffs")}>
            {/* Sign-in */}
            Richard
          </HeaderItem>
          <Divider />
          <Button
            text="Log-out"
            background="#4E7AEF"
            width="100%"
            height="47px"
            onSubmit={() => router.push("/auth/sign-in")}
          />
        </Section>
      </Popup>
      <Header
        ref={ref}
        isMobile={isMobile}
        mobileHeaderStyle={mobileHeaderStyle}
      >
        <HeaderItem onClick={() => router.push("/")}>
          <Image src={EllieLogo} alt="" />
        </HeaderItem>
        {isMobile ? (
          <ButtonBase
            style={{ cursor: "pointer" }}
            onClick={() => setPopupVisible(true)}
          >
            <Image src={moreIcon} alt="" width={35} />
          </ButtonBase>
        ) : (
          page !== "auth" && (
            <Flex
              justify="flex-end"
              gap={width > 1400 ? "3rem" : "1.2rem"}
              overflow="unset"
            >
              <HeaderItem onClick={handleClick}>
                Services we offer{" "}
                {open ? (
                  <ExpandLessIcon
                    sx={{
                      color: "#161616",
                      marginLeft: ".5rem",
                    }}
                    fontSize="large"
                  />
                ) : (
                  <ExpandMoreIcon
                    sx={{
                      color: "#161616",
                      marginLeft: ".5rem",
                    }}
                    fontSize="large"
                  />
                )}
                {open && (
                  <ServiceMenu>
                    {navItems.map((item, idx) => (
                      <HeaderItem
                        key={idx}
                        onClick={() => router.push(`/${item.link}`)}
                      >
                        {item.name}
                      </HeaderItem>
                    ))}
                  </ServiceMenu>
                )}
              </HeaderItem>
              <HeaderItem onClick={() => router.push("/drop-off")}>
                Drop-off
              </HeaderItem>
              <HeaderItem onClick={() => router.push("/my-dropoffs")}>
                {/* Sign-in */}
                Richard
              </HeaderItem>
              <Button
                text="Log-out"
                background="#4E7AEF"
                width="165px"
                height="47px"
                onSubmit={() => router.push("/auth/sign-in")}
              />
            </Flex>
          )
        )}
      </Header>
        {isMobile && <Divider style={{ marginTop: "4.5rem" }} />}
    </>
  );
};

const Header = styled("nav")<{ isMobile: boolean; mobileHeaderStyle: any }>(
  ({ isMobile, mobileHeaderStyle }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    margin: "0 auto",

    ...(isMobile && mobileHeaderStyle),
  })
);
const HeaderItem = styled(MuiButton)(() => ({
  fontSize: "1.8rem",
  fontWeight: 500,
  color: "#161616",
  cursor: "pointer",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  textTransform: "unset",
  fontFamily: "Avenir, sans-serif",
  height: "100%",
  position: "relative",
  padding: "6px 0",
  "& img": {
    width: "100px",
    height: "21px",
    marginRight: "3rem",
  },

  "&:hover": {
    backgroundColor: "transparent",
  },
}));
const ServiceMenu = styled("div")(() => ({
  // display: open ? "block" : "none",
  position: "absolute",
  top: "110%",
  left: 0,
  width: "286px",
  backgroundColor: "white",
  boxShadow: "0px 7px 19px -12px rgb(0 0 0 / 75%)",
  // WebkitBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  // MozBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  borderRadius: "10px",
  padding: "1rem",
}));

const Pad = styled("div")(() => ({
  height: ".8rem",
  width: "15rem",
  backgroundColor: "#E7E7E7",
  borderRadius: "10px",
  margin: "2rem auto",
}));

export default HeaderNav;
