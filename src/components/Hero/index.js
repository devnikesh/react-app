import React from "react";
import { Wrapper, Paragraph } from "../styles/base.styled";
import { Container, Heading, Image, ImageContainer } from "./style";
import Particles from "../../resources/img/particles.png";
import HeroImg from "../../resources/img/me.png";
const Hero = () => {
  return (
    <Wrapper style={{ padding: "40px 50px" }}>
      <Container>
        <Heading>Front-End Developer, Designer & Digital Marketer</Heading>
        <Paragraph>I Love Coding & Designing Sites.</Paragraph>
      </Container>
      <Container style={{ marginTop: 0, paddingTop: 0 }}>
        <ImageContainer>
          <Image src={HeroImg} style={{ width: "45%" }} />
          <Image
            src={Particles}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default Hero;
