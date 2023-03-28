import React from "react";

interface HeroTextProps {
  width?: string;
  height?: string;
}

export const HeroTextIcon: React.FC<HeroTextProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      //   viewBox={`0 0 ${width} ${height}`}
      viewBox="0 0 729 173"
    >
      <g id="Group_281" data-name="Group 281" transform="translate(-120 -182)">
        <text
          id="Expert_financial_services_for_your_small_business"
          data-name="Expert financial services
for your small business"
          transform="translate(120 246)"
          fill="#161616"
          font-size="64"
          font-family="Avenir-Heavy, Avenir"
          font-weight="800"
        >
          <tspan x="0" y="0">
            Expert financial services
          </tspan>
          <tspan x="0" y="88">
            for your small business
          </tspan>
        </text>
        <path
          id="Path_61"
          data-name="Path 61"
          d="M249,825.272c148.091-9.248,235.441,0,235.441,0"
          transform="translate(96.569 -564.683)"
          fill="none"
          stroke="#4e7aef"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </g>
    </svg>
  );
};
export default HeroTextIcon;
