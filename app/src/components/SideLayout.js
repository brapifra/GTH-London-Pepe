import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 3rem;
  height: 100%;
`;

export default function SideLayout({ aside, main }) {
  return (
    <Layout>
      {aside}
      {main}
    </Layout>
  );
}
