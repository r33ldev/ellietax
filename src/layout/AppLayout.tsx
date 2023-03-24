import { styled } from "@mui/material";
import Head from "next/head";
import React from "react";

interface ApplayoutProps {
  children: React.ReactNode;
  titleTag?: string;
}

const PageBody = styled("div")(() => ({
  height: "100vh",
  // width: "100vw",
  // overflowX: "hidden",
  maxWidth: '1700px',
  margin: '0 auto',
}));

export const Applayout: React.FC<ApplayoutProps> = ({ children, titleTag }) => {
  const title = titleTag ? `${titleTag} | Richoco` : "Richoco";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageBody>{children}</PageBody>
    </>
  );
};
export default Applayout;
