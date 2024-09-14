import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  letter-spacing: 0.05rem; 
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  line-height: 1.8;
  font-size: 1.2rem; 
  margin-bottom: 1.5rem; 
  letter-spacing: 0.03rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <AboutSection id="about" ref={ref}>
      <Container as={motion.div} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Heading>About Me</Heading>
            <Paragraph>
              I'm Edmund (Yi Feng) Lim, a Software Engineering student at Iowa State University with a CGPA of 3.80 (Class of Spring 2025). Recognized in the top 2% academic ranking and a 4-time Dean's List recipient, I have hands-on experience in full-stack development, embedded systems, web development, and digital logic design.
            </Paragraph>
            <Paragraph>
              My coursework includes Algorithm Design and Analysis, User Interface Design, and Machine Learning, where I've gained proficiency in technologies like Java, JavaScript, Python, PHP, MongoDB, and more.
            </Paragraph>
            <Paragraph>
              I'm passionate about Machine Learning, Full Stack Development, Embedded Systems, and Data Analysis. Fluent in English, Mandarin, Malay, and Cantonese, I bring a diverse perspective to every project.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
}

export default About;