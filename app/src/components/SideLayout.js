import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 3rem;
  height: 100%;

  & > * {
    overflow: hidden;
    min-width: 0;
    height: 100%;
  }
`;

export default function SideLayout({ aside, main }) {
  return (
    <Layout>
      <Fade left>
        <aside>{aside}</aside>
      </Fade>
      <Fade right>
        <main>{main}</main>
      </Fade>
    </Layout>
  );
}
