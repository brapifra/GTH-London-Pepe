import React from "react";
import Text from "src/components/Text";
import styled from "styled-components";
import Svg from "src/components/Svg";

const Container = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Place({
  rating = 5,
  info = "Highest rated escape room in Prague for horror film lovers.",
  srcImg = "static/zombie.jpg",
}) {
  const stars = new Array(rating)
    .fill(undefined)
    .map((value, index) => <Svg src="static/assets/rating-star-filled.svg" />);

  // TODO: Use data from signalR
  return (
    <Container>
      <Text
        size={2}
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {info}
        <Text size={3} style={{ marginTop: 15, display: "block" }}>
          Community rating:
          <div style={{ display: "flex" }}>{stars}</div>
        </Text>
      </Text>
      <img src={srcImg} height="90%" />
    </Container>
  );
}
