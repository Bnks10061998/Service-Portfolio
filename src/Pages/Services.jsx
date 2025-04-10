// Glass Light Blue

// import React, { useEffect, useRef, useState } from 'react';
// import VanillaTilt from 'vanilla-tilt';
// import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

// const services = [
//   {
//     title: 'Website Design & Development',
//     description: 'Modern, responsive, and SEO-optimized websites that represent your brand, engage your audience.',
//     img: './wd.png',
//     moreInfo: 'From static landing pages to full-stack dynamic platforms, we create web experiences that captivate users and boost conversions.'
//   },
//   {
//     title: 'Mobile App Development',
//     description: 'Innovative and user-friendly mobile apps for Android and iOS that boost business growth.',
//     img: './mad.png',
//     moreInfo: 'We build performance-optimized native and cross-platform mobile applications tailored to your business needs.'
//   },
//   {
//     title: 'UI/UX Designing',
//     description: 'Securing digital landscapes through intuitive UI & UX design, crafted for confidence and clarity.',
//     img: '../../public/ui.png',
//     moreInfo: 'Creating visually intuitive and secure user interfaces that enhance usability while reinforcing strong cybersecurity measures across every interaction.'
//   },
//   {
//     title: 'Custom Software Development',
//     description: 'Tailored software solutions designed to streamline your business operations and enhance productivity.',
//     img: './csd.png',
//     moreInfo: 'We analyze your workflow and develop software solutions that improve performance and scalability across departments.'
//   },
//   {
//     title: 'Cloud Services',
//     description: 'Secure and scalable cloud solutions for data storage, backup, and infrastructure management.',
//     img: './cloud.png',
//     moreInfo: 'We assist in migrating to the cloud, managing cloud infrastructure, and integrating cloud-native tools for optimized performance.'
//   },
//   {
//     title: 'IT Support & Maintenance',
//     description: '24/7 technical support and maintenance services to keep your systems running smoothly and efficiently.',
//     img: './itm.png',
//     moreInfo: 'Get proactive monitoring, instant issue resolution, and long-term IT infrastructure support.'
//   },
// ];

// const Services = () => {
//   const cardRefs = useRef([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     cardRefs.current.forEach((card) => {
//       if (card) {
//         VanillaTilt.init(card, {
//           max: 10,
//           speed: 400,
//           glare: true,
//           "max-glare": 0.2,
//         });
//       }
//     });
//   }, []);

//   const handleShowModal = (service) => {
//     setSelectedService(service);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedService(null);
//   };

//   return (
//     <section
//       id="services"
//       className="py-3"
//       style={{
//         backgroundColor: 'white',
//         minHeight: '100vh',
//       }}
//     >
//       <Container>
//         <h2 className="text-center mb-4 fw-bold" style={{ color: '#003A84' }}>Our Services</h2>
//         <Row>
//           {services.map((service, index) => (
//             <Col md={6} lg={4} className="mb-4" key={index}>
//               <div
//                 className="glass-card tilt-card"
//                 ref={(el) => (cardRefs.current[index] = el)}
//               >
//                 <div className="border-line"></div>
//                 <Card className="h-100 bg-transparent text-white">
//                   <Card.Img
//                     variant="top"
//                     src={service.img}
//                     alt={service.title}
//                     style={{
//                       height: '150px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                   <Card.Body style={{ color: "#003A84" }}>
//                     <Card.Title className="fw-bold">{service.title}</Card.Title>
//                     <Card.Text>{service.description}</Card.Text>
//                     <Button
//                       className="mt-2 rounded-pill border fw-semibold"
//                       style={{
//                         backgroundColor: '#003A84',
//                         border: 'none',
//                         color: 'white',
//                       }}
//                       onClick={() => handleShowModal(service)}
//                     >
//                       Know More
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Modal */}
//       <Modal show={showModal} onHide={handleCloseModal} centered size="md" contentClassName="glass-modal">
//         <Modal.Header closeButton style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
//           <Modal.Title className="text-white">{selectedService?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-white">
//           <img
//             src={selectedService?.img}
//             alt={selectedService?.title}
//             className="img-fluid mb-3"
//             style={{ borderRadius: '10px' }}
//           />
//           <p>{selectedService?.description}</p>
//           <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
//           <p><strong>More Info:</strong> {selectedService?.moreInfo}</p>
//         </Modal.Body>
//         <Modal.Footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
//           <Button variant="light" onClick={handleCloseModal} className="fw-semibold">
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* All Styles Inside Component */}
//       <style>{`
//         .glass-card {
//           position: relative;
//           padding: 2px;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 20px;
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           box-shadow: 0 0 20px rgba(0, 191, 255, 0.15);
//           transition: all 0.4s ease;
//           border: 1px solid rgba(255, 255, 255, 0.15);
//         }

//         .glass-card:hover {
//           transform: scale(1.02);
//           box-shadow: 0 0 25px rgba(0, 191, 255, 0.6),
//                       0 0 40px rgba(0, 191, 255, 0.3),
//                       0 0 80px rgba(0, 191, 255, 0.15);
//         }

//         .tilt-card {
//           transition: transform 0.2s ease;
//         }

//         .border-line {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//         }

//         .border-line::before,
//         .border-line::after {
//           content: '';
//           position: absolute;
//           width: 0;
//           height: 1px;
//           background-color: rgba(255, 255, 255, 0.6);
//           transition: all 1s ease;
//         }

//         .border-line::before {
//           top: 0;
//           left: 0;
//         }

//         .border-line::after {
//           bottom: 0;
//           right: 0;
//         }

//         .glass-card:hover .border-line::before,
//         .glass-card:hover .border-line::after {
//           width: 100%;
//         }

//         .glass-card:hover::before,
//         .glass-card:hover::after {
//           content: '';
//           position: absolute;
//           height: 100%;
//           width: 1px;
//           background-color: rgba(255, 255, 255, 0.6);
//           transition: all 1s ease;
//         }

//         .glass-card:hover::before {
//           top: 0;
//           left: 0;
//         }

//         .glass-card:hover::after {
//           top: 0;
//           right: 0;
//         }

//         .glass-modal {
//           background: rgba(255, 255, 255, 0.05) !important;
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border-radius: 16px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
//           color: white;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Services;

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
    <section
      id="services"
      className="py-4"
      style={{ backgroundColor: '#fff', minHeight: '100vh' }}
    >
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#003A84' }}>
          Our Services
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <div
                className="tilt-depth-card"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <Card className="h-100 bg-transparent text-white border-0">
                  <Card.Img
                    variant="top"
                    src={service.img}
                    alt={service.title}
                    style={{ height: '150px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                  />
                  <Card.Body style={{ color: '#003A84' }}>
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button
                      className="mt-2 rounded-pill border fw-semibold"
                      style={{
                        backgroundColor: '#003A84',
                        border: 'none',
                        color: 'white',
                      }}
                      onClick={() => handleShowModal(service)}
                    >
                      Know More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="md"
        contentClassName="glass-modal"
      >
        <Modal.Header closeButton style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <Modal.Title className="text-white">{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">
          <img
            src={selectedService?.img}
            alt={selectedService?.title}
            className="img-fluid mb-3"
            style={{ borderRadius: '10px' }}
          />
          <p>{selectedService?.description}</p>
          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          <p>
            <strong>More Info:</strong> {selectedService?.moreInfo}
          </p>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <Button variant="light" onClick={handleCloseModal} className="fw-semibold">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 🔥 Tilt + Depth Styles */}
      <style>{`
        .tilt-depth-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
        }

        .tilt-depth-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 58, 132, 0.3), 0 0 20px rgba(0, 255, 231, 0.3);
        }

        .glass-modal {
          background: rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Services;
