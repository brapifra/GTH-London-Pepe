import React from "react";
import { isEmpty } from "lodash";
import { Heading } from "@kiwicom/orbit-components";
import styled from "styled-components";
import Video from "src/components/Video";
import SideLayout from "src/components/SideLayout";
import Svg from "src/components/Svg";

import { useSignalR } from "../context/SignalR";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainSection = styled.div`
  padding: 3rem 1rem;
`;

export default function App() {
  const data = useSignalR();

  return (
    <Container>
      {isEmpty(data) ? (
        <Svg src="static/assets/Kee-logo.svg" width="40%" />
      ) : (
        <SideLayout
          aside={<Video src="static/prague.mp4" startAt={37} autoPlay muted />}
          main={
            <MainSection>
              <Svg height="100px" src="static/assets/Kee-logo.svg" />
              <Heading type="displaySubtitle" element="h1">
                Prague
              </Heading>
            </MainSection>
          }
        />
      )}
    </Container>
  );
}
