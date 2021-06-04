import React from "react";
import { Container } from "./styles";

export default function Repository() {
  return (
    <Container>
      <h1>Repository Name</h1>
      <h4>Repository Description</h4>
      <div>
        <span>Language</span>
        <span>Last Update</span>
      </div>
    </Container>
  );
}
