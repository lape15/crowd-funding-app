import styled from "styled-components";
import logo from '../assets/logo.svg'
import background from '../assets/image-hero-desktop.jpg'
import backgroundMobile from '../assets/image-hero-mobile.jpg'

const TopNav = styled.section`
  display: flex;
  justify-content:center;
  width: 100%;
  padding: 3rem 7.5% 21rem;
  background-position: center;
  box-shadow: inset 0 0 15rem rgb(0 0 0);
  background-image: url(${background});
 background-size: cover;
  @media (max-width: 768px) {
    background-position: center;
    background-image: url(${backgroundMobile});
   }
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
font-size: 1rem;
margin-right: 5px;
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
