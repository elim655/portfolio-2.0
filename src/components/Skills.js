import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
`;

const SkillsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
`;

const SkillList = styled.ul`
  list-style-type: none;
  columns: 2;
  font-size: 1.2rem;
  line-height: 1.6;
  column-gap: 2rem;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
`;

function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SkillsSection id="skills" ref={ref}>
      <SkillsContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Heading>Skills & Interests</Heading>
        <SkillList>
          <SkillItem>
            <strong>Technical:</strong> Java, JavaScript, HTML, CSS, C, C++, Python, MySQL, PHP, jQuery, MongoDB
          </SkillItem>
          <SkillItem>
            <strong>Tools:</strong> GitHub, SpringBoot, Android Studio, AWS
          </SkillItem>
          <SkillItem>
            <strong>Languages:</strong> English, Mandarin, Malay, Cantonese
          </SkillItem>
          <SkillItem>
            <strong>Interests:</strong> Machine Learning, Full Stack Development, Embedded Systems, Data Analysis
          </SkillItem>
        </SkillList>
      </SkillsContent>
    </SkillsSection>
  );
}

export default Skills;