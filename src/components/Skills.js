import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import JavaLogo from '../logos/java.png';
import JsLogo from '../logos/javascript.svg';
import HtmlLogo from '../logos/html5.svg';
import CssLogo from '../logos/css3.svg';
import PythonLogo from '../logos/python.svg';
import CLogo from '../logos/c.svg';
import CplusplusLogo from '../logos/cplusplus.svg';
import ReactLogo from '../logos/react.svg';
import JqueryLogo from '../logos/jquery.svg';
import SpringbootLogo from '../logos/spring.svg';
import PhpLogo from '../logos/php.svg';
import MongoDBLogo from '../logos/mongodb.svg';
import MySQLLogo from '../logos/mysql.svg';
import GitHubLogo from '../logos/github.svg';
import AWSLogo from '../logos/aws.svg';
import AndroidStudioLogo from '../logos/androidstudio.svg';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled(motion.h2)`
  color: #00ffea;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #00ffea;
  }
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const SkillCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00ffea;
    transform: translateY(-5px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 255, 234, 0.03));
    pointer-events: none;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const LogoWrapper = styled.div`
  background: rgba(240, 240, 240, 0.1);
  padding: 0.8rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
`;

const SkillLevel = styled.div`
  font-size: 0.9rem;
  color: #00ffea;
`;

const ProgressBarWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  height: 6px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ffea, #00a8ff);
  border-radius: 10px;
`;

const SkillDetails = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #ccc;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(0, 255, 234, 0.1);
  color: #00ffea;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedSkill, setSelectedSkill] = useState(null);

  const technicalSkills = [
    {
      name: 'Java',
      logo: JavaLogo,
      level: 'Advanced',
      proficiency: 90,
      description: 'Extensive experience in Java development including Spring Boot applications and Android development.',
      projects: ['Truco Card Game', 'Student Management System'],
      keywords: ['Spring Boot', 'Android', 'JUnit', 'Maven']
    },
    {
      name: 'React',
      logo: ReactLogo,
      level: 'Advanced',
      proficiency: 85,
      description: 'Modern React development using hooks, context, and state management libraries.',
      projects: ['Portfolio Website', 'E-commerce Dashboard'],
      keywords: ['Hooks', 'Redux', 'Context API', 'Next.js']
    },
    {
      name: 'Python',
      logo: PythonLogo,
      level: 'Intermediate',
      proficiency: 75,
      description: 'Python for data analysis, automation, and backend development.',
      projects: ['Data Analysis Tools', 'Automation Scripts'],
      keywords: ['NumPy', 'Pandas', 'Flask', 'Automation']
    },
    {
      name: 'C/C++',
      logo: CplusplusLogo,
      level: 'Advanced',
      proficiency: 85,
      description: 'Low-level programming and embedded systems development.',
      projects: ['MIPS Pipeline Processor', 'Room Service Robot'],
      keywords: ['Embedded Systems', 'Data Structures', 'Algorithms']
    }
  ];

  const developmentTools = [
    {
      name: 'AWS',
      logo: AWSLogo,
      level: 'Intermediate',
      proficiency: 70,
      description: 'Cloud infrastructure and deployment using various AWS services.',
      keywords: ['EC2', 'S3', 'Lambda', 'CloudFormation']
    },
    {
      name: 'GitHub',
      logo: GitHubLogo,
      level: 'Advanced',
      proficiency: 90,
      description: 'Version control and collaboration using Git and GitHub.',
      keywords: ['Git Flow', 'Actions', 'Pull Requests', 'CI/CD']
    },
    {
      name: 'Spring Boot',
      logo: SpringbootLogo,
      level: 'Advanced',
      proficiency: 85,
      description: 'Backend development with Spring Boot framework.',
      keywords: ['REST APIs', 'Security', 'JPA', 'Microservices']
    }
  ];

  const databases = [
    {
      name: 'MongoDB',
      logo: MongoDBLogo,
      level: 'Advanced',
      proficiency: 75,
      description: 'NoSQL database design and implementation.',
      keywords: ['Aggregation', 'Indexing', 'Atlas', 'Mongoose']
    },
    {
      name: 'MySQL',
      logo: MySQLLogo,
      level: 'Advanced',
      proficiency: 85,
      description: 'Relational database design and optimization.',
      keywords: ['Query Optimization', 'Indexing', 'Stored Procedures']
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
    <SkillsSection id="skills" ref={ref}>
      <SkillsContent
        as={motion.div}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={containerVariants}
      >
        <Heading variants={itemVariants}>Skills & Expertise</Heading>

        <CategorySection variants={itemVariants}>
          <Heading as="h3" style={{ fontSize: '2rem' }}>Technical Skills</Heading>
          <SkillsGrid>
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedSkill(skill)}
              >
                <SkillHeader>
                  <LogoWrapper>
                    <img src={skill.logo} alt={`${skill.name} logo`} />
                  </LogoWrapper>
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}</SkillLevel>
                  </SkillInfo>
                </SkillHeader>
                <ProgressBarWrapper>
                  <ProgressBar
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </ProgressBarWrapper>
                <SkillDetails>
                  {skill.description}
                </SkillDetails>
                <TagsContainer>
                  {skill.keywords.map((keyword, i) => (
                    <Tag key={i}>{keyword}</Tag>
                  ))}
                </TagsContainer>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategorySection>

        <CategorySection variants={itemVariants}>
          <Heading as="h3" style={{ fontSize: '2rem' }}>Development Tools</Heading>
          <SkillsGrid>
            {developmentTools.map((tool, index) => (
              <SkillCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <SkillHeader>
                  <LogoWrapper>
                    <img src={tool.logo} alt={`${tool.name} logo`} />
                  </LogoWrapper>
                  <SkillInfo>
                    <SkillName>{tool.name}</SkillName>
                    <SkillLevel>{tool.level}</SkillLevel>
                  </SkillInfo>
                </SkillHeader>
                <ProgressBarWrapper>
                  <ProgressBar
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </ProgressBarWrapper>
                <SkillDetails>
                  {tool.description}
                </SkillDetails>
                <TagsContainer>
                  {tool.keywords.map((keyword, i) => (
                    <Tag key={i}>{keyword}</Tag>
                  ))}
                </TagsContainer>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategorySection>

        <CategorySection variants={itemVariants}>
          <Heading as="h3" style={{ fontSize: '2rem' }}>Databases</Heading>
          <SkillsGrid>
            {databases.map((db, index) => (
              <SkillCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <SkillHeader>
                  <LogoWrapper>
                    <img src={db.logo} alt={`${db.name} logo`} />
                  </LogoWrapper>
                  <SkillInfo>
                    <SkillName>{db.name}</SkillName>
                    <SkillLevel>{db.level}</SkillLevel>
                  </SkillInfo>
                </SkillHeader>
                <ProgressBarWrapper>
                  <ProgressBar
                    initial={{ width: 0 }}
                    animate={{ width: `${db.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </ProgressBarWrapper>
                <SkillDetails>
                  {db.description}
                </SkillDetails>
                <TagsContainer>
                  {db.keywords.map((keyword, i) => (
                    <Tag key={i}>{keyword}</Tag>
                  ))}
                </TagsContainer>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategorySection>
      </SkillsContent>
    </SkillsSection>
  );
}

export default Skills;