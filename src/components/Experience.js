import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

import PLALogo from '../logos/PLA.png';
import ISULogo from '../logos/isu.png';
import DNFLogo from '../logos/dnf.jpeg';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  color: #00ffea;
  font-size: 2.5rem;
  margin-bottom: 3rem;
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
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #00ffea 0%, rgba(0, 255, 234, 0.1) 100%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  margin: 2rem 0;
  width: calc(50% - 30px);
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(0, 255, 234, 0.1);
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.position === 'right' ? 'margin-left: calc(50% + 30px);' : ''}
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00ffea;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 24px;
    width: 30px;
    height: 2px;
    background: #00ffea;
    ${props => props.position === 'right' ? 'left: -30px;' : 'right: -30px;'}
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    width: 10px;
    height: 10px;
    background: #00ffea;
    border-radius: 50%;
    ${props => props.position === 'right' ? 'left: -35px;' : 'right: -35px;'}
    box-shadow: 0 0 10px rgba(0, 255, 234, 0.5);
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    
    &:before {
      left: -30px;
    }
    
    &:after {
      left: -35px;
    }
  }
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 60px;
  margin-bottom: 1rem;
  background: ${props => `url(${props.src})`} center center/contain no-repeat;
  filter: grayscale(100%) brightness(1.2);
  transition: all 0.3s ease;
  
  ${ExperienceCard}:hover & {
    filter: grayscale(0%);
  }
`;

const JobTitle = styled.h3`
  color: #00ffea;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const CompanyName = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  svg {
    color: #00ffea;
  }
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    color: #ccc;
    line-height: 1.6;
    
    &:before {
      content: '→';
      position: absolute;
      left: 0;
      color: #00ffea;
    }
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  background: rgba(0, 255, 234, 0.1);
  color: #00ffea;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: #00ffea;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  
  svg {
    transition: transform 0.3s ease;
    ${props => props.expanded && 'transform: rotate(90deg);'}
  }
`;

function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 1,
      position: 'left',
      logo: PLALogo,
      title: 'Full Stack Developer',
      company: 'Performance Livestock Analytics',
      location: 'Ames, IA',
      date: 'May 2024 – Present',
      description: [
        'Collaborate with a team to develop customizable analytic dashboards for the Performance Beef platform.',
        'Implement frontend and backend features using PHP and jQuery, with MongoDB for database.',
        'Design and manage modals for adding and organizing data visualizations, enhancing user interaction.',
        'Optimize database queries and implement caching strategies for improved performance.',
        'Participate in code reviews and contribute to architectural decisions.'
      ],
      skills: ['PHP', 'jQuery', 'MongoDB', 'REST APIs', 'Analytics', 'Git']
    },
    {
      id: 2,
      position: 'right',
      logo: ISULogo,
      title: 'Digital Logic Design Teaching Assistant',
      company: 'Iowa State University',
      location: 'Ames, IA',
      date: 'Aug 2023 – Present',
      description: [
        'Conduct weekly labs using FPGA boards and Transistor-Transistor Logic.',
        'Lead recitation sessions that recap lecture material and answer homework questions.',
        'Assist students during weekly office hours and contribute to exam grading and proctoring duties.',
        'Develop supplementary learning materials and practice problems.',
        'Mentor students in digital design concepts and troubleshooting.'
      ],
      skills: ['Digital Logic', 'FPGA', 'Verilog', 'Teaching', 'Mentoring']
    },
    {
      id: 3,
      position: 'left',
      logo: DNFLogo,
      title: 'Web Developer Intern',
      company: 'DNF Cable',
      location: 'Remote',
      date: 'Dec 2021 – Jul 2022',
      description: [
        'Developed and maintained company websites and web applications using HTML, CSS, and JavaScript.',
        'Implemented responsive design techniques for optimal viewing across various devices.',
        'Collaborated with IT to integrate web applications with backend services.',
        'Optimized website performance and implemented SEO best practices.',
        'Created documentation for website maintenance and updates.'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO', 'Web Performance']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <SectionTitle variants={cardVariants}>Professional Experience</SectionTitle>
          
          <TimelineContainer>
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                position={exp.position}
                variants={cardVariants}
                onClick={() => toggleCard(exp.id)}
              >
                <CompanyLogo src={exp.logo} />
                <JobTitle>{exp.title}</JobTitle>
                <CompanyName>{exp.company}</CompanyName>
                
                <MetaInfo>
                  <span><FaCalendar /> {exp.date}</span>
                  <span><FaMapMarkerAlt /> {exp.location}</span>
                </MetaInfo>
                
                <Description>
                  {(expandedCards[exp.id] ? exp.description : exp.description.slice(0, 3)).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </Description>
                
                <SkillTags>
                  {exp.skills.map((skill, index) => (
                    <SkillTag key={index}>{skill}</SkillTag>
                  ))}
                </SkillTags>
                
                {exp.description.length > 3 && (
                  <ExpandButton
                    expanded={expandedCards[exp.id]}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(exp.id);
                    }}
                  >
                    {expandedCards[exp.id] ? 'Show Less' : 'Show More'}
                    <FaChevronRight />
                  </ExpandButton>
                )}
              </ExperienceCard>
            ))}
          </TimelineContainer>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
}

export default Experience;