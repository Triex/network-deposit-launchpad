import React from 'react';

interface Props {
  x: number;
  y: number;
  color?: string;
}

const EthMarker: React.FC<Props> = ({ x, y }) => (
  <g transform={`translate(${x - 22}, ${y - 25})`}>
    <g
      id="Hexagon"
      transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) translate(-3.000000, 3.000000)"
      fill="#1C2D54"
      fill-rule="nonzero"
    >
      <polygon points="50 22 37.5 44 12.5 44 0 22 12.5 -1.28173664e-14 37.5 -1.28173664e-14"></polygon>
    </g>
    <g id="Group" transform="translate(11.000000, 15.000000)">
      <polygon
        id="Front"
        fill="#DBD3D3"
        points="0 10 5.729799 20 17 20 11.3282072 10"
      ></polygon>
      <polygon
        id="Top"
        fill="#EEEDED"
        points="0 10 5.71455551 4.67494424e-16 17 0 11.3282072 10"
      ></polygon>
      <polygon
        id="Right"
        fill="#E7E7E7"
        points="16.9927665 0 23 9.98922893 16.9927665 20 11 10"
      ></polygon>
    </g>
  </g>
);

export default EthMarker;
