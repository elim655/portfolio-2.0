import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #000;
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

function Contact() {
  return (
    <ContactSection>
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
    </ContactSection>
  );
}

export default Contact;