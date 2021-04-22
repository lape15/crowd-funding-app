import { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import background from '../assets/image-hero-desktop.jpg';
import backgroundMobile from '../assets/image-hero-mobile.jpg';
import menu from '../assets/icon-hamburger.svg';
import closeMenu from '../assets/icon-close-menu.svg';

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
   @media(max-width: 512px){
    flex-wrap: wrap
    position: relative;
   }
`;

const Nav = styled.nav`
  flex: 60%;
  ${({ menu }) =>
    menu &&
    `
 display: none;
 @media(max-width: 512px){
   flex: 40%;
   display:inline-block;
   text-align: right;
 }
`}
  ${({ right, showMobileMenu }) =>
    right &&
    `
    flex: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 512px){
    display : block;
    width: 94%;
    top: 15vh;
    background: #FFF;
    position: absolute;
    z-index: 3;
    padding: 10px;
    border-radius: 1rem;
    box-shadow: 0 0 3rem rgba(0,0,0,0.5);
    max-height: 0;
    opacity:0;
    transition: all 0.5s ease;
 }
 ${
   showMobileMenu &&
   `
 @media(max-width: 512px){
    opacity: 1;
    max-height: 250px;
    transition: all 0.5s ease;
    }
  `
 }
`}
`;

const NavItem = styled.div`
  color: #fff;
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  ${({ right }) =>
    right &&
    `
@media(max-width: 512px){
  color: #000;
  padding: 20px 0;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  line-height: 2;
  font-weight: 700;
  font-size: 1.2rem;
  &:nth-of-type(3){
    border-bottom:none;
    }
  }
`}
`;

const Logo = styled.img`
  width: 100px;
  @media (max-width: 512px) {
    width: 135px;
  }
`;
const TopSection = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  return (
    <TopNav>
      <Nav>
        <NavItem>
          <Logo src={logo} alt="logo" />
        </NavItem>
      </Nav>
      <Nav menu onClick={handleMobileMenu}>
        {!showMobileMenu ? (
          <img src={menu} alt="menu" />
        ) : (
          <img src={closeMenu} alt="close_menu" />
        )}
      </Nav>
      <Nav right showMobileMenu={showMobileMenu}>
        <NavItem right> About</NavItem>
        <NavItem right>Discover</NavItem>
        <NavItem right> Get Started</NavItem>
      </Nav>
    </TopNav>
  );
};

export default TopSection;
