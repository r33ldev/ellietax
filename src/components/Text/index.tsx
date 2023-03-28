import React from "react";

interface indexProps {
  type: string;
  text: string;
  color?: string;
  fontSize?: string;
  styles?: React.CSSProperties;
}

export const Text: React.FC<indexProps> = ({
  type,
  styles = {},
  text,
  color,
  fontSize,
}) => {
  styles.color = color ? color : "black";
  styles.fontSize = fontSize ? fontSize : "1rem";
  if (type === "p") return <p style={{ ...styles }}>{text}</p>;
  if (type === "h1") return <h1 style={{ ...styles }}>{text}</h1>;
  if (type === "h2") return <h2 style={{ ...styles }}>{text}</h2>;
  return <div style={{...styles}}>{text}</div>;
};
export default Text;
