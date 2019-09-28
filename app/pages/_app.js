import * as React from "react";
import App, { Container } from "next/app";
import { getTokens } from "@kiwicom/orbit-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { SignalRProvider } from "src/context/SignalR";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: GothamRounded;
    src: url("static/GothamRounded-Light.otf") format("opentype");
  }
  @font-face {
    font-family: GothamRounded;
    font-weight: bold;
    src: url("static/GothamRounded-Medium.otf") format("opentype");
  }

  html {
    font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  }
  body, #__next {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: '#f7f8fa';
  }
`;

const tokens = getTokens();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <SignalRProvider url={process.env.SIGNALR_URL}>
          <ThemeProvider theme={{ orbit: tokens }}>
            <>
              <GlobalStyle />
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </SignalRProvider>
      </Container>
    );
  }
}
