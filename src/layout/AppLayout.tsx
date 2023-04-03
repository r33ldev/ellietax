import { styled } from "@mui/material";
import Head from "next/head";
import React from "react";

interface ApplayoutProps {
  children: React.ReactNode;
  titleTag?: string;
}

const PageBody = styled("div")(() => ({
  height: "100vh",
  width: "100vw",
  // background: "#F9F9F9",
  overflowX: "hidden",
}));

export const Applayout: React.FC<ApplayoutProps> = ({ children, titleTag }) => {
  const title = titleTag ? `${titleTag}` : "Ellietax";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <PageBody>
        <div
          style={{
            maxWidth: "1750px",
            width: "100%",
            display: "block",
            margin: "0 auto",
          }}
        >
          {children}
        </div>
      </PageBody>
    </>
  );
};
export default Applayout;
