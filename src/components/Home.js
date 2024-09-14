import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  height: 100vh;
  background: #000;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Greeting = styled(motion.h1)`
  color: #00ffea;
  font-size: 4rem;
  text-align: center;
`;

function Home() {
  return (
    <HomeSection>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <meshStandardMaterial attach="material" color="#00ffea" wireframe />
        </Sphere>
      </Canvas>
      <Overlay>
        <Greeting
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </Greeting>
      </Overlay>
    </HomeSection>
  );
}

export default Home;