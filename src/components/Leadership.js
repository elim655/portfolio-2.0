import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaChevronDown, FaGraduationCap, FaDragon, FaRunning } from 'react-icons/fa';

const LeadershipSection = styled.section`
  padding: 6rem 2rem;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
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

const LeadershipGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ActivityCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 234, 0.1);
  cursor: pointer;
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

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    color: #00ffea;
    font-size: 2rem;
  }
`;

const ActivityTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 0;
`;

const ActivityDate = styled.span`
  color: #00ffea;
  font-size: 0.9rem;
  display: block;
  margin-top: 0.5rem;
`;

const ActivityDescription = styled(motion.div)`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const ExpandButton = styled(motion.button)`
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
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const TagContainer = styled.div`
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

function Leadership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activities = [
    {
      id: 1,
      title: "Tau Beta Pi",
      subtitle: "Engineering Honor Society",
      date: "Aug 2023 - Present",
      icon: <FaTrophy />,
      description: "Member of the prestigious engineering honor society, representing the top 1/8 of engineering seniors.",
      details: [
        "Participated in community service projects",
        "Attended professional development workshops",
        "Networked with industry professionals",
        "Mentored junior engineering students"
      ],
      tags: ["Leadership", "Engineering", "Mentoring", "Community Service"]
    },
    {
      id: 2,
      title: "CS & Software Engineering Club",
      subtitle: "Active Member",
      date: "Aug 2022 - Present",
      icon: <FaUsers />,
      description: "Active member contributing to various technical projects and community initiatives.",
      details: [
        "Participated in coding competitions",
        "Organized technical workshops",
        "Collaborated on group projects",
        "Helped organize hackathons"
      ],
      tags: ["Technical Projects", "Team Collaboration", "Event Planning", "Coding"]
    },
    {
      id: 3,
      title: "Guang Hua Lion Dance Club",
      subtitle: "Performer & Team Member",
      date: "Aug 2022 - Present",
      icon: <FaDragon />,
      description: "Performer and active member promoting Chinese cultural heritage through traditional lion dance.",
      details: [
        "Performed at cultural events",
        "Trained new members",
        "Participated in competitions",
        "Organized cultural workshops"
      ],
      tags: ["Cultural Heritage", "Performance", "Team Building", "Leadership"]
    },
    {
      id: 4,
      title: "Cheerleading Spirit Squad ISU",
      subtitle: "Team Member",
      date: "Aug 2022 - May 2023",
      icon: <FaRunning />,
      description: "Member of the ISU Cheerleading Spirit Squad, representing the university at various events.",
      details: [
        "Performed at university events",
        "Maintained rigorous training schedule",
        "Promoted school spirit",
        "Developed teamwork skills"
      ],
      tags: ["Team Spirit", "Athletics", "Time Management", "Performance"]
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
    <LeadershipSection id="leadership" ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <Heading variants={cardVariants}>Leadership & Activities</Heading>
          
          <LeadershipGrid>
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ActivityHeader>
                  {activity.icon}
                  <div>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDate>{activity.date}</ActivityDate>
                  </div>
                </ActivityHeader>
                
                <ActivityDescription>
                  {activity.description}
                  
                  <AnimatePresence>
                    {expandedCards[activity.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
                          {activity.details.map((detail, index) => (
                            <li key={index} style={{ marginBottom: "0.5rem" }}>{detail}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ActivityDescription>
                
                <TagContainer>
                  {activity.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagContainer>
                
                <ExpandButton
                  expanded={expandedCards[activity.id]}
                  onClick={() => toggleCard(activity.id)}
                >
                  {expandedCards[activity.id] ? "Show Less" : "Show More"}
                  <FaChevronDown />
                </ExpandButton>
              </ActivityCard>
            ))}
          </LeadershipGrid>
        </motion.div>
      </Container>
    </LeadershipSection>
  );
}

export default Leadership;