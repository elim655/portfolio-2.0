import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Card } from 'react-bootstrap';

import PLALogo from '../logos/PLA.png';
import ISULogo from '../logos/isu.png';
import DNFLogo from '../logos/dnf.jpeg';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
`;

const JobTitle = styled.h3`
  color: #00ffea;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const JobDetails = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const JobDescription = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Logo = styled.img`
  width: 80px;
  height: 60px;
  margin-bottom: 1rem;
`;

function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container as={motion.div} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        
        <Row className="mb-4">
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <Logo src={PLALogo} alt="Performance Livestock Logo" />
          </Col>
          <Col md={8}>
            <Card className="bg-dark text-white mb-4">
              <Card.Body>
                <JobTitle>Full Stack Developer</JobTitle>
                <JobDetails>May 2024 – Present | Performance Livestock Analytics, Ames, IA</JobDetails>
                <JobDescription>
                  <li>Developed customizable dashboards for Performance Beef using PHP, jQuery, and MongoDB.</li>
                  <li>Designed modals for data visualization, improving user interaction.</li>
                </JobDescription>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <Logo src={ISULogo} alt="Iowa State University Logo" />
          </Col>
          <Col md={8}>
            <Card className="bg-dark text-white mb-4">
              <Card.Body>
                <JobTitle>Digital Logic Design CPR E 281 – Teaching Assistant</JobTitle>
                <JobDetails>Aug 2023 – Present | Iowa State University, Ames, IA</JobDetails>
                <JobDescription>
                  <li>Conduct weekly labs with FPGA boards and assist in lectures, grading, and office hours.</li>
                </JobDescription>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <Logo src={DNFLogo} alt="DNF Cable Logo" />
          </Col>
          <Col md={8}>
            <Card className="bg-dark text-white mb-4">
              <Card.Body>
                <JobTitle>Web Developer Intern</JobTitle>
                <JobDetails>Dec 2021 – Jul 2022 | DNF Cable</JobDetails>
                <JobDescription>
                  <li>Maintained websites using HTML, CSS, and JavaScript; implemented responsive design.</li>
                </JobDescription>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </ExperienceSection>
  );
}

export default Experience;