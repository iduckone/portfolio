import React from 'react';
import styled from 'styled-components';

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
  children: React.ReactNode;
}

export default function Text({ variant, children }: Props) {
  return <StyledText variant={variant}>{children}</StyledText>;
}

const StyledText = styled.div<{ variant: string }>`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: rgba(0, 0, 0, 0.87);
  margin: 0px 0px 0.35em;
  padding: 0;
  line-height: 1.5;
  font-weight: normal;

  ${(props) =>
    props.variant === 'h1' &&
    `
    font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  `}
  ${(props) =>
    props.variant === 'h2' &&
    `
    font-weight: 300;
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  `}
  ${(props) =>
    props.variant === 'h3' &&
    `
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
  `}
  ${(props) =>
    props.variant === 'h4' &&
    `
    
    font-weight: 400;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  `}
  ${(props) =>
    props.variant === 'h5' &&
    `
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  `}
  ${(props) =>
    props.variant === 'h6' &&
    `
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  `}
  ${(props) =>
    props.variant === 'h7' &&
    `
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  `}
`;
