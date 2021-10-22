import React from 'react';
import styled from 'styled-components';
import { Button as GrommetButton, ButtonProps } from 'grommet';

interface CustomButtonProps {
  className?: string;
  width?: number;
  fullWidth?: boolean;
  gradient?: boolean;
  onClick?: () => any;
}

const calculateWidth = (p: { width?: number; fullWidth?: boolean }) => {
  if (p.width) {
    return `${p.width}px`;
  }
  if (p.fullWidth) {
    return '100%';
  }
};

const StyledButton = styled(GrommetButton)`
  display: block;
  padding: 15px;
  border-radius: 4px;
  text-transform: uppercase;
  width: ${calculateWidth};
  font-size: 18px;
  letter-spacing: 1.5px;
  background-color: ${p =>
    p.primary ? p.theme.blue.dark : p.theme.gray.light};
  border: ${p => `1px solid ${p.theme.gray.medium}`};
  &:hover {
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    // background: #915d9b;
    color: #915d9b;
    background-image: none;
    transform: scale(1.02);
  }
  // gradient styles
  ${p =>
    // @ts-ignore
    p.gradient &&
    `//background-image: linear-gradient(to right, ${p.theme.gradientBlack});
     background: ${p.theme.gray.dark};
     color: ${p.theme.white};
     border: 1px solid ${p.theme.blue.dark};
     :hover {
       background: ${p.theme.gray.light};
     }
   `}
`;

export const Button = (props: CustomButtonProps & ButtonProps) => {
  const { className } = props;
  return <StyledButton className={className} {...props} />;
};
