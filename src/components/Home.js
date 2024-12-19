import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import edmundlim from '../logos/edmundlim.jpg';

const HomeSection = styled.section`
  height: 100vh;
  background: #0d0d0d;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #00ffea;
  filter: grayscale(50%);
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const TextContainer = styled(motion.div)`
  text-align: center;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
`;

const Greeting = styled(motion.h1)`
  color: #00ffea;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ffea, #00a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #00ffea;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #00ffea;
  font-size: 2rem;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 30px;
    background: linear-gradient(to bottom, #00ffea, transparent);
  }
`;

// 3D Animated Sphere
function AnimatedSphere() {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(time / 4);
    mesh.current.rotation.y = Math.sin(time / 4);
    mesh.current.position.z = Math.sin(time / 4) / 2;
  });

  return (
    <Sphere args={[1, 100, 200]} ref={mesh}>
      <MeshDistortMaterial
        color="#00ffea"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ffea"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00ffea",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce"
        }
      },
      size: {
        value: 3,
        random: true
      },
      opacity: {
        value: 0.5,
        random: true
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    background: {
      color: "transparent"
    },
    detectRetina: true
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <HomeSection>
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </ParticlesContainer>
      
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </CanvasContainer>

      <Overlay>
        <Container>
          <Content>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ImageContainer variants={itemVariants}>
                <ProfileImage
                  src={edmundlim}
                  alt="Edmund Lim"
                  whileHover={{ scale: 1.05 }}
                />
              </ImageContainer>

              <TextContainer variants={itemVariants}>
                <Greeting variants={itemVariants}>
                  Hello, I'm Edmund Lim
                </Greeting>
                <Title variants={itemVariants}>
                  Software Engineer & Full Stack Developer
                </Title>
                <Description variants={itemVariants}>
                  A passionate Software Engineering student at Iowa
                  State University, specializing in Machine Learning, Full Stack
                  Development, and Embedded Systems. Ranked in the top 2%
                  with a 3.80 CGPA.
                </Description>

                <SocialLinks variants={itemVariants}>
                  <SocialLink
                    href="https://github.com/elim655"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com/in/edmund-lim-38012b16b"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink
                    href="mailto:elim655@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope />
                  </SocialLink>
                </SocialLinks>
              </TextContainer>
            </motion.div>
          </Content>
        </Container>
      </Overlay>
      
      <ScrollIndicator
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        ↓
      </ScrollIndicator>
    </HomeSection>
  );
}

export default Home;