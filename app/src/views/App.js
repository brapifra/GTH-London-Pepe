import React from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";
import Svg from "src/components/Svg";
import { useSignalR } from "src/context/SignalR";

import Recommendation from "./Recommendation";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const data = useSignalR();

  return (
    <Container>
      {isEmpty(data) ? (
        <Svg src="static/assets/Kee-logo.svg" width="40%" />
      ) : (
        <Recommendation {...data} />
      )}
    </Container>
  );
}
