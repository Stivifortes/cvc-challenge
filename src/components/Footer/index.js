import React from "react";
import { FooterContainer } from "./styles";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <span>&copy; GitHub, Inc.</span>
      <div>
        <div>Terms</div>
        <div>Security</div>
        <div>Status</div>
        <div>Docs</div>
        <div>
          <FaGithub />
        </div>
        <div>Contact Github</div>
        <div>Pricing</div>
        <div>API</div>
        <div>Training</div>
        <div>Blog</div>
        <div>About</div>
      </div>
    </FooterContainer>
  );
}
