import { styled } from "@mui/material";
import Head from "next/head";
import React from "react";

interface ApplayoutProps {
  children: React.ReactNode;
  titleTag?: string;
}

const PageBody = styled("div")(() => ({
  height: "100%",
  width: "100%",
  background: "#F9F9F9",
  overflowX: "hidden",
}));

export const Applayout: React.FC<ApplayoutProps> = ({ children, titleTag }) => {
  const title = titleTag ? `${titleTag} | Richoco` : "Richoco";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <PageBody>
        <div style={{ maxWidth: "1500px", width:'100%', display: "block", margin: "0 auto", background:'red', overflow:'hidden' }}>
          {children} 
        </div>
      </PageBody>
    </>
  );
};
export default Applayout;
