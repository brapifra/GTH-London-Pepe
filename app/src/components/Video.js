import React from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Video({ src, startAt = 0, ...props }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const video = ref.current;

    if (!video) {
      return;
    }

    video.currentTime = startAt;
  }, [src, startAt, ref]);

  return <StyledVideo ref={ref} src={src} {...props} />;
}
