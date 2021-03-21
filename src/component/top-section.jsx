import styled from "styled-components";
import logo from '../assets/logo.svg'
import background from '../assets/image-hero-desktop.jpg'

const TopNav = styled.section`
  display: flex;
  justify-content:center;
  height: 50vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  padding: 40px 80px;
  background-size:  100%;
`;

const Nav = styled.nav`
 flex:60%;
 ${({right}) => right &&`
    flex: 40%;
    display: flex;
    justify-content: flex-end;
 `}
`;

const NavItem = styled.div`
color: #fff;
font-family:'Commissioner', sans-serif;
font-weight: 700;
font-size: 0.9rem;
margin-right: 20px;
`;

const Logo = styled.img`
    width: 100px;
`
const TopSection = () => (
  <TopNav>
  <Nav>
  <NavItem>
    <Logo src={logo} alt="logo"/>
  </NavItem>
  </Nav>
    <Nav right>
      <NavItem> About</NavItem>
      <NavItem>Discover</NavItem>
      <NavItem> Get Started</NavItem>
    </Nav>
  </TopNav>
);

export default TopSection;
