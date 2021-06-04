import React from "react";
import { Container, Main, Nav, SearchNav } from "./styles";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <Container>
      <Main>
        <Nav>
          <FaGithub />
          <nav>
            <div>Why Github?</div>
            <div>Team</div>
            <div>Enterprise</div>
            <div>Explore</div>
            <div>Marketplace</div>
            <div>Pricing</div>
          </nav>
        </Nav>
        <SearchNav>
          <input type="text" placeholder="Search or jump to..." />
          Sign in
          <button>Sign Up</button>
        </SearchNav>
      </Main>
    </Container>
  );
}
