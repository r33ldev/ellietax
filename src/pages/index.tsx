import Applayout from "@/layout/AppLayout";
import { styled } from "@mui/material";

const ArrowDown = styled("div")(() => ({
  textAlign: "center",
  width: "100%",
  margin: "7rem 0 10rem 0",
  cursor: "pointer",
}));

export default function Home() {
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll);
  //   };
  // }, []);

  return (
    <Applayout titleTag="Digital Agency Based in United States & Nigeria | UI UX and Development - Richoco Studio ">
      <>something's about to happen here!</>
    </Applayout>
  );
}
