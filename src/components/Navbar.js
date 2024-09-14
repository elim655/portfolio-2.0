import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: #0d0d0d;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;

const NavLogo = styled(Link)`
  color: #00ffea;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-right: auto;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavMenu = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    background-color: #0d0d0d;
    transition: 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-left: 2rem;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #00ffea;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLogo to="/portfolio-2.0">Edmund Lim</NavLogo>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <NavMenu isOpen={isOpen}>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About Me</NavLink>
        <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
        <NavLink to="/leadership" onClick={() => setIsOpen(false)}>Leadership</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;