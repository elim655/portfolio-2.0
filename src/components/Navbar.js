import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #0d0d0d;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
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
    margin-bottom: 1rem;
  }
`;

const NavMenu = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
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

function Navbar() {
  return (
    <Nav>
      <NavLogo to="/portfolio-2.0">Edmund Lim</NavLogo>
      <NavMenu>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/leadership">Leadership</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;