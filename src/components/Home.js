import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import edmundlim from '../logos/edmundlim.jpg';

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

const Greeting = styled.h1`
  color: #00ffea;
  font-size: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
  margin: 0 auto 2rem;
`;

function Home() {
  return (
    <HomeSection>
      <Overlay>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <Image src={edmundlim} alt="Edmund Lim" />
            </Col>
            <Col md={6}>
              <Greeting>Hello, my name is Edmund</Greeting>
              <Description>
                I'm a Software Engineering student with a passion for Machine Learning and Full Stack Development.
              </Description>
            </Col>
          </Row>
        </Container>
      </Overlay>
    </HomeSection>
  );
}

export default Home;