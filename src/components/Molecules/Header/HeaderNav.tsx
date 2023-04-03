import Button from "@/components/Button";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { Button as MuiButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EllieLogo from "@/assets/images/ellietax-logo.png";
import Flex from "@/components/Flex";

interface HeaderProps {}
export const HeaderNav: React.FC<HeaderProps> = ({}) => {
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
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Header>
      <HeaderItem onClick={() => router.push("/")}>
        <Image src={EllieLogo} alt="" />
      </HeaderItem>
      <Flex justify="flex-end" gap="2vw" overflow='unset'>
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
              <HeaderItem key={idx} onClick={() => router.push(`/${item.link}`)}>
                {item.name}
              </HeaderItem>
            ))}
            </ServiceMenu>
          )}
        </HeaderItem>
        <HeaderItem onClick={() => router.push("/drop-off")}>
          Drop-off
        </HeaderItem>
        <HeaderItem onClick={() => router.push("/sign-in")}>
          {" "}
          Sign-in
        </HeaderItem>
        <Button
          text="Log-out"
          background="#4E7AEF"
          width="165px"
          height="47px"
          onSubmit={() => router.push("/sign-in")}
        />
      </Flex>
    </Header>
  );
};

const Header = styled("nav")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
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
  top: "70%",
  left: 0,
  width: "286px",
  backgroundColor: "white",
  boxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  WebkitBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  MozBoxShadow: "0px 1px 16px -14px rgb(0 0 0 / 75%)",
  borderRadius: "10px",
  padding: "1rem",
}));
export default HeaderNav;
