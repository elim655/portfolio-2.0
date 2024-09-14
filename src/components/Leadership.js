import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LeadershipSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
`;

const LeadershipContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ActivityList = styled.ul`
  list-style-type: none;
  font-size: 1.1rem;
`;

const ActivityItem = styled.li`
  margin-bottom: 0.5rem;
`;

function Leadership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <LeadershipSection ref={ref}>
      <LeadershipContent
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      >
        <Heading>Leadership & Activities</Heading>
        <ActivityList>
          <ActivityItem>
            Tau Beta Pi (Engineering Honor Society) &mdash; Aug 2023 - Present
          </ActivityItem>
          <ActivityItem>
            CS & Software Engineering Club &mdash; Aug 2022 - Present
          </ActivityItem>
          <ActivityItem>
            Guang Hua Lion Dance Club &mdash; Aug 2022 - Present
          </ActivityItem>
          <ActivityItem>
            Cheerleading Spirit Squad ISU &mdash; Aug 2022 - May 2023
          </ActivityItem>
        </ActivityList>
      </LeadershipContent>
    </LeadershipSection>
  );
}

export default Leadership;