import React from "react";
import { Heading } from "@kiwicom/orbit-components";
import styled from "styled-components";
import Video from "src/components/Video";
import SideLayout from "src/components/SideLayout";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  padding: 3rem 1rem;
`;

export default function App() {
  return (
    <Container>
      <SideLayout
        aside={<Video src="static/prague.mp4" startAt={37} autoPlay muted />}
        main={
          <MainSection>
            <Heading color="white" type="display" element="h1">
              Kee
            </Heading>
            <Heading type="displaySubtitle" element="h1">
              Prague
            </Heading>
          </MainSection>
        }
      />
    </Container>
  );
}
