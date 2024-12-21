import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css';

const ThankYou = () => {
  const handleRedirect = () => {
    window.location.href = '/home';
  };

  return (
    <section className="thank-you-section">
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank-you-container">
              <span className="thank-you-icon">
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="thank-you-title mb-3 fw-semibold">Thank You!</h1>
              <h3 className="thank-you-message mb-4">Your tour is successfully booked.</h3>

              <Button className="btn primary-btn w-25" onClick={handleRedirect}>
                Back to Home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
