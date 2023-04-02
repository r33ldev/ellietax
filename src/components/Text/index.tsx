import React from "react";

interface indexProps {
  type: string;
  text: string;
  color?: string;
  fontSize?: string;
  weight?: string;
  styles?: React.CSSProperties;
}

export const Text: React.FC<indexProps> = ({
  type,
  styles = {},
  text,
  color,
  weight,
  fontSize,
}) => {
  styles.color = color ? color : "#161616";
  styles.fontSize = fontSize ? fontSize : "1rem";
  styles.fontWeight = weight ? weight : "normal";
  if (type === "p") return <p style={{ ...styles }}>{text}</p>;
  if (type === "h1") return <h1 style={{ ...styles }}>{text}</h1>;
  if (type === "h2") return <h2 style={{ ...styles }}>{text}</h2>;
  return <div style={{...styles}}>{text}</div>;
};
export default Text;
