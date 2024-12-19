import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  background: ${props => props.scrolled ? 'rgba(13, 13, 13, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const NavLogo = styled(motion(Link))`
  color: #00ffea;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00ffea;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavMenu = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 13, 13, 0.98);
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const NavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #00ffea;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00ffea;
    
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: #00ffea;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-size: 1rem;
  }
  
  &:hover {
    color: #fff;
  }
`;

const HamburgerIcon = styled(motion.div)`
  display: none;
  color: #00ffea;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ResumeButton = styled(motion.a)`
  background: #00ffea;
  color: #0d0d0d;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 234, 0.2);
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Here you would also update your theme context/state
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { to: "/about", text: "About" },
    { to: "/experience", text: "Experience" },
    { to: "/projects", text: "Projects" },
    { to: "/skills", text: "Skills" },
    { to: "/leadership", text: "Leadership" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <NavLogo
          to="/portfolio-2.0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Edmund Lim
        </NavLogo>

        <NavMenu>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.text}
            </NavLink>
          ))}
        </NavMenu>

        <NavControls>
          <IconButton
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </IconButton>

          <ResumeButton
            href="/portfolio-2.0/Edmund_Lim_Resume_Fall_24.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Resume
          </ResumeButton>

          <HamburgerIcon
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>
        </NavControls>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                >
                  {link.text}
                </NavLink>
              ))}
              <ResumeButton
                href="/portfolio-2.0/Edmund_Lim_Resume_Fall_24.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaDownload /> Download Resume
              </ResumeButton>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;