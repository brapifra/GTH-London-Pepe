import React from "react";
import Text from "src/components/Text";
import Alert from "src/components/Alert";
import Video from "src/components/Video";
import SideLayout from "src/components/SideLayout";
import styled from "styled-components";
import Svg from "src/components/Svg";

import Place from "../components/Place";

const MainSection = styled.div`
  padding: 4rem 2rem;

  & > * {
    margin-bottom: 3rem;
  }
`;

const Block = styled.div`
  display: flex;
  margin-top: 6rem;
  margin-bottom: 6rem;

  & > *:first-child {
    flex: 0.4;
  }
`;

const InfoBlock = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default function Recommendation({
  title = "Zombie Apocalypse Escape Room",
  subtitle = "Fully accessible",
}) {
  return (
    <SideLayout
      // TODO: Use data from signalR
      aside={<Video src="static/prague.mp4" startAt={37} autoPlay muted />}
      main={
        <MainSection>
          <Svg height="150px" src="static/assets/Kee-logo.svg" />
          <Block>
            <Svg src="static/assets/route-spot-illustration.svg" />
            <InfoBlock>
              <Alert>
                <Text>{title}</Text>
              </Alert>
              <Alert>
                <Text
                  style={{
                    display: "flex",
                    color: "#00826f",
                    alignItems: "center",
                  }}
                >
                  <Svg
                    src="static/assets/icons8-wheelchair.svg"
                    margin="0 1rem 0 0"
                  />
                  {subtitle}
                </Text>
              </Alert>
            </InfoBlock>
          </Block>

          <Alert width="85%">
            <Place />
          </Alert>
        </MainSection>
      }
    />
  );
}
