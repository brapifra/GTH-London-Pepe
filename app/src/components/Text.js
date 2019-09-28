import React from "react";
import { Heading } from "@kiwicom/orbit-components";

export default function Text({ children, size = "1", style }) {
  return (
    <Heading type={`title${size}`} element={`h${size}`}>
      <b style={{ ...style, fontFamily: "GothamRounded" }}>{children}</b>
    </Heading>
  );
}
