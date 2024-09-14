import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ContactLink = styled.a`
  color: #00ffea;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Heading>Contact Me</Heading>
        <ContactInfo>
          Email: <ContactLink href="mailto:elim655@gmail.com">elim655@gmail.com</ContactLink>
        </ContactInfo>
        <ContactInfo>
          LinkedIn:{' '}
          <ContactLink href="https://linkedin.com/in/edmund-lim-38012b16b" target="_blank">
            linkedin.com/in/edmund-lim-38012b16b
          </ContactLink>
        </ContactInfo>
        <ContactInfo>
          GitHub:{' '}
          <ContactLink href="https://github.com/elim655" target="_blank">
            github.com/elim655
          </ContactLink>
        </ContactInfo>
      </ContactContent>
    </ContactSection>
  );
}

export default Contact;