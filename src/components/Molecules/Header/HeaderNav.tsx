import Button from "@/components/Button";
import { styled } from "@mui/system";
import React, { useRef, useState } from "react";
import { Button as MuiButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EllieLogo from "@/assets/images/ellietax-logo.png";
import Flex from "@/components/Flex";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface HeaderProps {
  page?: string;
}
export const HeaderNav: React.FC<HeaderProps> = ({ page }) => {
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

  const { width } = useScreenResolution();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <Header ref={ref}>
      <HeaderItem onClick={() => router.push("/")}>
        <Image src={EllieLogo} alt="" />
      </HeaderItem>
      {page !== "auth" && (
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
      )}
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
export default HeaderNav;
