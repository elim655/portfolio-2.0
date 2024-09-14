import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

const LeadershipSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  text-align: center;
`;

const ActivityItem = styled(ListGroup.Item)`
  background: #1a1a1a;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding: 1rem;
`;

function Leadership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <LeadershipSection ref={ref}>
      <Container as={motion.div} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Heading>Leadership & Activities</Heading>
            <ListGroup variant="flush">
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
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </LeadershipSection>
  );
}

export default Leadership;