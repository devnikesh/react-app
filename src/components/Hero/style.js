import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 30px 0;
  align-items: center;
  padding: 30px 5.5vw;
  background: #ffffff;
  text-align: center;
`;

const Heading = styled.h2`
  color: #000000;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
`;
const ImageContainer = styled.div`
  object-fit: cover;
  width: 50%;
  position: relative;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export { Container, Heading, ImageContainer, Image };
