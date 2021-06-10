import styled from "styled-components";
import { fonts, fontSizes, primary } from "../../styles/pallete";
import { Wrapper } from "../UI/layout";
function Banner() {
  return (
    <Wrapper style={{ paddingTop: "10rem", paddingBottom: "10rem" }}>
      <HeroContent>
        <Name>
          <Letter>UTK</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            AR
          </Letter>
          <Letter>S</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            H
          </Letter>

          <Letter style={{ marginLeft: "1rem" }}>S</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            H
          </Letter>
          <Letter>UKL</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            A
          </Letter>
        </Name>
        <Tag>
          <Letter font={fonts.type1} color={primary.primary}>
            "
          </Letter>
          <Letter>CO</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            D
          </Letter>
          <Letter>E</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            R
          </Letter>
        </Tag>
        <Tag style={{ position: "relative", left: "19.3rem" }}>
          <Letter>T</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            H
          </Letter>
          <Letter>INKE</Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            R
          </Letter>
          <Letter font={fonts.type1} color={primary.primary}>
            "
          </Letter>
        </Tag>
      </HeroContent>
    </Wrapper>
  );
}

export default Banner;

const HeroContent = styled.div`
  position: relative;
  left: 5rem;
  z-index: 1;
  pointer-events: none;
`;
const Name = styled.p`
  font-size: ${fontSizes.body};
  transform: translateX(2rem);
`;
const Tag = styled.span`
  display: block;
  font-size: ${fontSizes.h1};
  line-height: calc(12rem * 1.07);
  letter-spacing: -3.5px;
`;
const Letter = styled.span`
  font-family: ${(props) => props.font || fonts.type2};
  color: ${(props) => props.color || primary.black};
`;
