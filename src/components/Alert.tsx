import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'grommet';

const variantStyles = {
  primary: {
    backgroundColor: '#cce5ff',
    borderColor: '#b8daff',
  },
  warning: {
    backgroundColor: '#fcf8e3',
    borderColor: '#faebcc',
  },
  secondary: {
    backgroundColor: '#fdfcfe',
    borderColor: '#d3d3d3',
  },
  info: {
    backgroundColor: '#eee0f3',
    borderColor: '#d7c7dd',
  },
  error: {
    backgroundColor: '#fff2df',
    borderColor: '#ebccd1',
  },
  success: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
};

const HighlightStyles = styled.div`
  .alert-highlight {
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.04);
    margin-right: 3px;
    margin-left: 3px;
  }
`;

export const Alert = (
  props: {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
    style?: any;
    variant?: string;
  } & BoxProps
): JSX.Element => {
  const { variant = 'primary', className, children, pad } = props;
  return (
    <Box
      border
      className={className}
      pad={pad || 'medium'}
      round="xsmall"
      variant={variant}
      {...props}
      // @ts-ignore
      style={variantStyles[variant]}
    >
      <HighlightStyles>{children}</HighlightStyles>
    </Box>
  );
};
