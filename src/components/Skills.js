import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #000;
  color: #fff;
`;

const SkillsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const SkillList = styled.ul`
  list-style-type: none;
  columns: 2;
  font-size: 1.1rem;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
`;

function Skills() {
  return (
    <SkillsSection>
      <SkillsContent>
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