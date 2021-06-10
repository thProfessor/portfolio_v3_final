import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { primary } from "../styles/pallete";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 });
  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <CursorContainer
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    >
      <Cursor />
    </CursorContainer>
  );
}

export default CustomCursor;

const CursorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
`;
const Cursor = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid ${primary.primary};
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
`;
