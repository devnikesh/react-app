import React from "react";
import { Wrapper } from "../../components/styles/Container.styled";
import { Container, Logo, MenuItems, Link } from "./styles";
import logo from "../../resources/img/Logo.png";
import Toggle from "../Toggle/index";
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={logo} />
        <MenuItems>
          <Toggle />
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
        </MenuItems>
      </Container>
    </Wrapper>
  );
};

export default Header;
