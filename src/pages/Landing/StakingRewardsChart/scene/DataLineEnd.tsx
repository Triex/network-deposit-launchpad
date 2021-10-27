import React from 'react';

interface Props {
  x: number;
  y: number;
  color?: string;
}

const DataLineEnd: React.FC<Props> = ({ x, y }) => (
  <g transform={`translate(${x - 8}, ${y - 12})`}>
    <g transform="translate(0.000000, 0.833333)" fill="#1C2D54">
      <g transform="translate(10.000000, 11.666667) rotate(90.000000) translate(-10.000000, -11.666667) translate(-1.666667, 1.666667)">
        <polygon points="23.3333333 10 17.5 20 5.83333333 20 0 10 5.83333333 0 17.5 0"></polygon>
      </g>
    </g>
  </g>
);

export default DataLineEnd;
