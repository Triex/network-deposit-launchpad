import React from 'react';

interface Props {
  x: number;
  y: number;
  color?: string;
}

const CurrentMarker: React.FC<Props> = ({ x, y }) => (
  <g transform={`translate(${x - 22.8}, ${y - 26.5})`}>
    <g
      id="Hexagon"
      transform="translate(23.000000, 27.000000) rotate(-90.000000) translate(-23.000000, -27.000000) translate(-2.000000, 5.000000)"
      stroke="#1C2D54"
      fill="white"
      stroke-width="2"
    >
      <polygon points="50 22 37.5 44 12.5 44 0 22 12.5 -1.28173664e-14 37.5 -1.28173664e-14"></polygon>
    </g>
  </g>
);

export default CurrentMarker;
