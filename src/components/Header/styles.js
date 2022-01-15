import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 3.5vw;
  background: #ffffff;
`;

const Logo = styled.img`
  width: 65px;
`;

const MenuItems = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 0 25px;
  color: #5a27ec;
`;
export { Container, Logo, MenuItems, Link };
