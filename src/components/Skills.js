import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
`;

const SkillsContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #1a1a1a;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  color: #fff;

  .logo-wrapper {
    background: #f0f0f0; /* Light background for better contrast */
    padding: 10px;
    border-radius: 50%;
    display: inline-block;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SkillItem = styled.div`
  font-size: 1.2rem;
  color: #fff;
  padding: 0.5rem 1rem;
  background: #1a1a1a;
  border-radius: 8px;
`;

function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const technicalSkills = [
    { name: 'Java', logo: JavaLogo },
    { name: 'JavaScript', logo: JsLogo },
    { name: 'HTML', logo: HtmlLogo },
    { name: 'PHP', logo: PhpLogo },
    { name: 'React', logo: ReactLogo },
    { name: 'CSS', logo: CssLogo },
    { name: 'Python', logo: PythonLogo },
    { name: 'C', logo: CLogo },
    { name: 'C++', logo: CplusplusLogo },
    { name: 'Jquery', logo: JqueryLogo },
    { name: 'MongoDB', logo: MongoDBLogo },
    { name: 'MySQL', logo: MySQLLogo },
  ];

  const tools = [
    { name: 'GitHub', logo: GitHubLogo },
    { name: 'AWS', logo: AWSLogo },
    { name: 'SpringBoot', logo: SpringbootLogo },
    { name: 'Android Studio', logo: AndroidStudioLogo },
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <SkillsContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >

        <Heading>Technical Skills</Heading>
        <SkillsGrid>
          {technicalSkills.map((skill, index) => (
            <Card key={index}>
              <div className="logo-wrapper">
                <img src={skill.logo} alt={`${skill.name} logo`} />
              </div>
              <p>{skill.name}</p>
            </Card>
          ))}
        </SkillsGrid>

        <Heading>Tools</Heading>
        <SkillsGrid>
          {tools.map((tool, index) => (
            <Card key={index}>
              <div className="logo-wrapper">
                <img src={tool.logo} alt={`${tool.name} logo`} />
              </div>
              <p>{tool.name}</p>
            </Card>
          ))}
        </SkillsGrid>

        <Heading>Languages</Heading>
        <SkillList>
          <SkillItem>English</SkillItem>
          <SkillItem>Mandarin</SkillItem>
          <SkillItem>Malay</SkillItem>
          <SkillItem>Cantonese</SkillItem>
        </SkillList>

        <Heading>Interests</Heading>
        <SkillList>
          <SkillItem>Machine Learning</SkillItem>
          <SkillItem>Full Stack Development</SkillItem>
          <SkillItem>Embedded Systems</SkillItem>
          <SkillItem>Data Analysis</SkillItem>
        </SkillList>
      </SkillsContent>
    </SkillsSection>
  );
}

export default Skills;