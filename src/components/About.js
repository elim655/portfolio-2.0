import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaTrophy, FaCode, FaLanguage, FaLightbulb } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Heading = styled(motion.h2)`
  color: #00ffea;
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  letter-spacing: 0.05rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: #00ffea;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled(motion.h3)`
  color: #00ffea;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Paragraph = styled(motion.p)`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.03rem;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  margin: 3rem 0;
  padding-left: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #00ffea 0%, rgba(0, 255, 234, 0.1) 100%);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: #00ffea;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 255, 234, 0.5);
  }
`;

const TimelineDate = styled.span`
  color: #00ffea;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;
`;

const TimelineTitle = styled.h4`
  color: #fff;
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const TimelineDescription = styled.p`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
`;

const AchievementGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 234, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00ffea;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1rem 0;
`;

const SkillTag = styled.span`
  background: rgba(0, 255, 234, 0.1);
  color: #00ffea;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const InterestCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: #00ffea;
    font-size: 1.5rem;
  }
`;

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Heading variants={itemVariants}>About Me</Heading>
              
              <Paragraph variants={itemVariants}>
                I'm Edmund (Yi Feng) Lim, a passionate Software Engineering student at Iowa State University with a stellar academic record (CGPA: 3.80, Class of Spring 2025). Ranking in the top 2% academically and being a 4-time Dean's List recipient reflects my dedication to excellence in technology and innovation.
              </Paragraph>

              <SubHeading variants={itemVariants}>
                <FaGraduationCap /> Academic Journey
              </SubHeading>
              
              <TimelineContainer variants={itemVariants}>
                <TimelineItem>
                  <TimelineDate>2021 - Present</TimelineDate>
                  <TimelineTitle>Iowa State University</TimelineTitle>
                  <TimelineDescription>
                    Bachelor's in Software Engineering
                    <br />
                    • Top 2% Academic Ranking
                    <br />
                    • 4-time Dean's List recipient
                  </TimelineDescription>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineDate>2023</TimelineDate>
                  <TimelineTitle>Advanced Coursework</TimelineTitle>
                  <TimelineDescription>
                    Completed advanced courses in Algorithm Design, UI/UX Design, and Machine Learning, laying a strong foundation in both theoretical and practical aspects of software engineering.
                  </TimelineDescription>
                </TimelineItem>
              </TimelineContainer>

              <SubHeading variants={itemVariants}>
                <FaTrophy /> Key Achievements
              </SubHeading>
              
              <AchievementGrid>
                <AchievementCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
                  <h4>Academic Excellence</h4>
                  <p>Maintained 3.80 CGPA while pursuing challenging technical courses and projects</p>
                </AchievementCard>
                
                <AchievementCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
                  <h4>Technical Projects</h4>
                  <p>Successfully developed and deployed multiple full-stack applications and embedded systems</p>
                </AchievementCard>
              </AchievementGrid>

              <SubHeading variants={itemVariants}>
                <FaCode /> Technical Focus
              </SubHeading>
              
              <Paragraph variants={itemVariants}>
                My coursework and projects have given me hands-on experience in:
              </Paragraph>
              
              <SkillsContainer>
                <SkillTag>Full Stack Development</SkillTag>
                <SkillTag>Embedded Systems</SkillTag>
                <SkillTag>Machine Learning</SkillTag>
                <SkillTag>Digital Logic Design</SkillTag>
                <SkillTag>UI/UX Design</SkillTag>
              </SkillsContainer>

              <SubHeading variants={itemVariants}>
                <FaLanguage /> Language Proficiency
              </SubHeading>
              
              <InterestCard variants={itemVariants}>
                Fluent in English, Mandarin, Malay, and Cantonese, enabling effective communication across diverse teams and cultures.
              </InterestCard>

              <SubHeading variants={itemVariants}>
                <FaLightbulb /> Interests & Goals
              </SubHeading>
              
              <Paragraph variants={itemVariants}>
                I'm particularly passionate about pushing the boundaries in Machine Learning, Full Stack Development, and Embedded Systems. My goal is to create innovative solutions that make a meaningful impact in these areas while continuing to learn and grow as a software engineer.
              </Paragraph>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </AboutSection>
  );
}

export default About;