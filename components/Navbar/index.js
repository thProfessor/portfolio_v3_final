import React from "react";
import styled from "styled-components";
import { primary } from "../../styles/pallete";
import { Wrapper } from "../UI/layout";
import List from "./List";

function Navbar() {
  return (
    <>
      <Nav>
        <Wrapper
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <A>Home</A>
          <List />
        </Wrapper>
      </Nav>
    </>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 8rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;
const A = styled.a`
  color: ${primary.black};
  position: relative;
  font-size: 1.2rem;
  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 10rem;
    background-color: ${primary.primary};
  }
`;
