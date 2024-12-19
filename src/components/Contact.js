import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 234, 0.1);
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: #00ffea;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const InfoText = styled.div`
  h4 {
    color: #fff;
    margin: 0 0 0.5rem 0;
  }
  
  p {
    color: #ccc;
    margin: 0;
  }
  
  a {
    color: #00ffea;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 234, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${props => props.error ? '#ff4444' : 'rgba(0, 255, 234, 0.2)'};
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #00ffea;
    box-shadow: 0 0 0 2px rgba(0, 255, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${props => props.error ? '#ff4444' : 'rgba(0, 255, 234, 0.2)'};
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #00ffea;
    box-shadow: 0 0 0 2px rgba(0, 255, 234, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  background: #00ffea;
  color: #0d0d0d;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 234, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled(motion.p)`
  color: #ff4444;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(0, 255, 234, 0.1);
  border: 1px solid #00ffea;
  color: #00ffea;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  text-align: center;
`;

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    //TODO: Add actual form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <ContactSection id="contact" ref={ref}>
      <ContactContainer>
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <Heading variants={itemVariants}>Get In Touch</Heading>
          
          <ContactGrid>
            <ContactInfo>
              <InfoItem variants={itemVariants}>
                <FaMapMarkerAlt />
                <InfoText>
                  <h4>Location</h4>
                  <p>Ames, Iowa</p>
                </InfoText>
              </InfoItem>
              
              <InfoItem variants={itemVariants}>
                <FaEnvelope />
                <InfoText>
                  <h4>Email</h4>
                  <p><a href="mailto:elim655@gmail.com">elim655@gmail.com</a></p>
                </InfoText>
              </InfoItem>
              
              <InfoItem variants={itemVariants}>
                <FaPhone />
                <InfoText>
                  <h4>Phone</h4>
                  <p>Available upon request</p>
                </InfoText>
              </InfoItem>
              
              <InfoItem variants={itemVariants}>
                <FaLinkedin />
                <InfoText>
                  <h4>LinkedIn</h4>
                  <p>
                    <a href="https://linkedin.com/in/edmund-lim-38012b16b" target="_blank" rel="noopener noreferrer">
                      edmund-lim-38012b16b
                    </a>
                  </p>
                </InfoText>
              </InfoItem>
              
              <InfoItem variants={itemVariants}>
                <FaGithub />
                <InfoText>
                  <h4>GitHub</h4>
                  <p>
                    <a href="https://github.com/elim655" target="_blank" rel="noopener noreferrer">
                      github.com/elim655
                    </a>
                  </p>
                </InfoText>
              </InfoItem>
            </ContactInfo>
            
            <ContactForm
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              <AnimatePresence>
                {submitSuccess && (
                  <SuccessMessage
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </SuccessMessage>
                )}
              </AnimatePresence>
              
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                />
                {errors.name && (
                  <ErrorMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.name}
                  </ErrorMessage>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <ErrorMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.email}
                  </ErrorMessage>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <ErrorMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.subject}
                  </ErrorMessage>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label>Message</Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <ErrorMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.message}
                  </ErrorMessage>
                )}
              </FormGroup>
              
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;