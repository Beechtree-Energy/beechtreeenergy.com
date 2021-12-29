import React from 'react';
import styled from 'styled-components';
import { useSanity } from '../hooks';

const StyledAnchor = styled.a`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledIconCircle = styled.i`
  color: ${(props) => props.$color};
  -webkit-text-stroke-color: ${(props) => props.$outlineColor};
  /* height: 75px;
  width: 75px; */
  &:hover {
    color: ${(props) => props.$colorHover};
  }
`;

const StyledIconPhone = styled.i`
  color: ${(props) => props.$color};
  &:hover {
    color: ${(props) => props.$colorHover};
  }
`;

const CallBtn = () => {
  const { info, website, primary, secondary, accent, neutral, hero } =
    useSanity();
  return (
    <StyledAnchor
      // $color={primary.dark.color}
      // $bgColor={primary.dark.color}
      href={info.phoneUrl}
      className="call-btn fa-stack fa-2x"
    >
      <StyledIconCircle
        $color={primary.dark.color}
        $colorHover={primary.darker.color}
        $outlineColor={accent.default.color}
        className="fas fa-circle fa-stack-2x btn-outline"
      />
      <StyledIconPhone
        $color={accent.default.color}
        $colorHover={accent.default.color}
        className="fas fa-phone fa-stack-1x fa-inverse"
      />
    </StyledAnchor>
  );
};

export default CallBtn;
