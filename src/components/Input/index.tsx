import React from 'react'

interface indexProps {
  width?: string;
  height?: string;
  border?: string;
  placeholder?: string;
  padding?: string;
  br?: string;
}

export const Input: React.FC<indexProps> = ({
  width,
  height,
  border,
  placeholder,
  padding,
  br
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        width: width || "100%",
        height: height || "100%",
        border: border || "1px solid #E7E7E7",
        padding: padding || "1rem",
        fontFamily: "Avenir",
        fontSize: "1.8rem",
        borderRadius: br || "8px",
        outline: "none",
        resize: "none",
      }}
    />
  );
};

export const TextArea: React.FC<indexProps> = ({
  width,
  height,
  border,
  placeholder,
  padding,
}) => {
  return (
    <textarea
      style={{
        width: width || "100%",
        height: height || "100%",
        border: border || "1px solid #E7E7E7",
        padding: padding || "1rem",
        fontFamily: "Avenir",
        fontSize: "2rem",
        borderRadius: "8px",
        outline: "none",
        resize: "none",
      }}
      name=""
      placeholder={placeholder}
      id=""
      cols={10}
      rows={7}
    ></textarea>
  );
};

export default Input