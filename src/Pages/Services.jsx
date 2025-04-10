
// Good Glow

import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const services = [
  {
    title: 'Website Design & Development',
    description: 'Modern, responsive, and SEO-optimized websites that represent your brand and engage your audience.',
    img: './wd.png',
    moreInfo: 'From static landing pages to full-stack dynamic platforms, we create web experiences that captivate users and boost conversions.'
  },
  {
    title: 'Mobile App Development',
    description: 'Innovative and user-friendly mobile apps for Android and iOS that boost business growth.',
    img: './mad.png',
    moreInfo: 'We build performance-optimized native and cross-platform mobile applications tailored to your business needs.'
  },
  {
    title: 'UI/UX Designing',
    description: 'Securing digital landscapes through intuitive UI & UX design, crafted for confidence and clarity.',
    img: '../../public/ui.png',
    moreInfo: 'Creating visually intuitive and secure user interfaces that enhance usability while reinforcing strong cybersecurity measures across every interaction.'
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to streamline your business operations and enhance productivity.',
    img: './csd.png',
    moreInfo: 'We analyze your workflow and develop software solutions that improve performance and scalability across departments.'
  },
  {
    title: 'Cloud Services',
    description: 'Secure and scalable cloud solutions for data storage, backup, and infrastructure management.',
    img: './cloud.png',
    moreInfo: 'We assist in migrating to the cloud, managing cloud infrastructure, and integrating cloud-native tools for optimized performance.'
  },
  {
    title: 'IT Support & Maintenance',
    description: '24/7 technical support and maintenance services to keep your systems running smoothly and efficiently.',
    img: './itm.png',
    moreInfo: 'Get proactive monitoring, instant issue resolution, and long-term IT infrastructure support.'
  },
];

const Services = () => {
  const cardRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 500,
          glare: true,
          'max-glare': 0.3,
        });
      }
    });
  }, []);

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div>
      <h1>Hi Friends</h1>
    </div>
  );
};

export default Services;
