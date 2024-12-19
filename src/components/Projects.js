import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: #000;
  border-radius: 12px;
  color: #fff;
  overflow: hidden;
  position: relative;
  border: 1px solid #00ffea;
  cursor: pointer;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => `url(${props.image}) center center/cover`};
  background-color: #1a1a1a;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #00ffea;
  font-size: 1.4rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.4;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: rgba(0, 255, 234, 0.1);
  color: #00ffea;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const IconLink = styled.a`
  color: #00ffea;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    color: #fff;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: #111;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid #00ffea;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  
  &:hover {
    color: #00ffea;
  }
`;

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      name: 'Truco Card Application',
      description: 'A digital implementation of the popular Brazilian card game Truco. Features multiplayer support, real-time gameplay, and an intuitive user interface.',
      shortDescription: 'Digital card game with multiplayer support',
      image: 'https://via.placeholder.com/400x200',
      techStack: ['Java', 'Android Studio', 'SpringBoot', 'SQL'],
      challenges: 'Implemented real-time multiplayer functionality and complex game logic while ensuring smooth user experience.',
      features: ['Real-time multiplayer', 'User authentication', 'Game state management', 'Chat system'],
      github: 'https://github.com/elim655/Truco',
    },
    {
      name: '5-Stage MIPS Pipeline Processor',
      description: 'Designed and implemented a fully functional 5-stage MIPS pipeline processor using Verilog, complete with hazard detection and forwarding units.',
      shortDescription: 'Verilog implementation of MIPS processor',
      image: 'https://via.placeholder.com/400x200',
      techStack: ['Verilog', 'Questa Sim', 'Digital Design', 'Computer Architecture'],
      challenges: 'Handled data hazards, control hazards, and pipeline stalls while maintaining processor efficiency.',
      features: ['Hazard detection', 'Data forwarding', 'Branch prediction', 'Pipeline optimization'],
      github: 'https://github.com/elim655/5-Stage-MIPS-Pipeline-Processor',
    },
    {
      name: 'Room Service Robot - iRobot Roomba',
      description: 'Transformed an iRobot Roomba into an autonomous room service robot capable of navigation and delivery tasks.',
      shortDescription: 'Autonomous room service robot implementation',
      image: 'https://via.placeholder.com/400x200',
      techStack: ['C', 'Python', 'Embedded Systems', 'Robotics'],
      challenges: 'Implemented complex navigation algorithms and sensor integration for autonomous operation.',
      features: ['Autonomous navigation', 'Obstacle avoidance', 'Path planning', 'Delivery tracking'],
      github: 'https://github.com/elim655/RoomServiceRobot-iRobot-Roomba',
    },
    {
      name: 'FPGA Vending Machine Project',
      description: 'Developed a fully functional vending machine system on FPGA, featuring digital currency handling and product dispensing logic.',
      shortDescription: 'FPGA-based vending machine implementation',
      image: 'https://via.placeholder.com/400x200',
      techStack: ['Quartus Prime', 'FPGA', 'Verilog HDL', 'Digital Design'],
      challenges: 'Implemented complex state machines and timing logic for reliable operation.',
      features: ['Digital currency handling', 'Product selection', 'Change calculation', 'LED display interface'],
      github: 'https://github.com/elim655/FPGA-Vending-Machine',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  return (
    <ProjectsSection>
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            onClick={() => setSelectedProject(project)}
          >
            {/* <ProjectImage image={project.image} /> */}
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.shortDescription}</ProjectDescription>
              <TagContainer>
                {project.techStack.map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </TagContainer>
              <ProjectLinks>
                <IconLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </IconLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CloseButton onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </CloseButton>
              <ProjectTitle>{selectedProject.name}</ProjectTitle>
              <ProjectDescription>{selectedProject.description}</ProjectDescription>
              
              <h4 style={{ color: '#00ffea', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Tech Stack</h4>
              <TagContainer>
                {selectedProject.techStack.map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </TagContainer>

              <h4 style={{ color: '#00ffea', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Challenges</h4>
              <ProjectDescription>{selectedProject.challenges}</ProjectDescription>

              <h4 style={{ color: '#00ffea', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Key Features</h4>
              <ul style={{ color: '#ccc', marginLeft: '1.5rem' }}>
                {selectedProject.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                ))}
              </ul>

              <ProjectLinks style={{ marginTop: '2rem' }}>
                <IconLink href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View on GitHub
                </IconLink>
              </ProjectLinks>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
}

export default Projects;