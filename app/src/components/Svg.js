import React from "react";
import styled from "styled-components";
import ReactSVG from "react-svg";

const SvgContainer = styled.div`
  & > div,
  & > div > div {
    width: fit-content;
    height: 100%;
  }

  width: ${({ width }) => (width !== undefined ? width : "inherit")};
  height: ${({ height }) => (height !== undefined ? height : "inherit")};
`;

export default function Svg({ width, height, src }) {
  return (
    <SvgContainer width={width} height={height}>
      <ReactSVG src={src} />
    </SvgContainer>
  );
}
