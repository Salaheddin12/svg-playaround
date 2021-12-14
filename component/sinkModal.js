import React from "react";

const SinkModal = ({ cxRight, cxLeft, leftLineWidth, rightLineWidth }) => {
  return (
    <svg
      width="454"
      height="340"
      viewBox="0 0 454 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_1_5)">
        <rect y="61" width="454" height="279" fill="#C4C4C4" />
      </g>
      <svg x={cxLeft}>
        <ellipse cx="175.5" cy="91.5" rx="16.5" ry="15.5" fill="#4E4E4E" />
        <path
          d="M175 69L180.774 59H169.226L175 69ZM174 16V60H176V16H174Z"
          fill="black"
        />
        <line y1="16.5" x2="175" y2="16.5" stroke="black" />
      </svg>
      <svg x={cxRight}>
        <ellipse cx="278.5" cy="91.5" rx="16.5" ry="15.5" fill="#4E4E4E" />
        <path
          d="M278 69L283.774 59H272.226L278 69ZM277 16V60H279V16H277Z"
          fill="black"
        />
        <line x1="278" y1="16.5" x2="454" y2="16.5" stroke="black" />
      </svg>
      <defs>
        <filter
          id="filter0_i_1_5"
          x="0"
          y="61"
          width="454"
          height="283"
          filterUnits="userSpaceOnUse"
        >
          <feFlood result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_5" />
        </filter>
      </defs>
    </svg>
  );
};

export default SinkModal;
