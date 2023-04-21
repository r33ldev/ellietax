import React from "react";

interface HeroTextProps {
  width?: string;
  vw: number;
  height?: string;
}

export const HeroTextIcon: React.FC<HeroTextProps> = ({
  width,
  height,
  vw,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${vw >= 1600 ? "100%" : 719} 173`}
      // viewBox=0 0 719 173"
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

export const HeroTextIconMobile: React.FC<HeroTextProps> = ({
  width,
  height,
  vw,
}: HeroTextProps) => {
  return (
    <svg
      id="Group_342"
      data-name="Group 342"
      xmlns="http://www.w3.org/2000/svg"
      // width="309"
      // height="163"
      width={width}
      height={height}
      viewBox="0 0 349 163"
    >
      <text
        id="Expert_financial_services_for_your_small_business"
        data-name="Expert financial
services for your
small business"
        transform="translate(0 40)"
        fill="#161616"
        font-size="40"
        font-family="Avenir-Heavy, Avenir"
        font-weight="800"
      >
        <tspan x="0" y="0">
          Expert financial
        </tspan>
        <tspan x="0" y="55">
          services for your
        </tspan>
        <tspan x="0" y="110">
          small business
        </tspan>
      </text>
      <path
        id="Path_61"
        data-name="Path 61"
        d="M249,824.659c92.789-7.869,147.52,0,147.52,0"
        transform="translate(-108.52 -773.683)"
        fill="none"
        stroke="#4e7aef"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};
