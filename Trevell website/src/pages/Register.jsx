import React, { useState } from 'react';
import '../styles/login.css';

import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, email, password } = credentials;

    if (!userName || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Add logic to handle registration (API call, form validation, etc.)
    console.log('Registering with:', credentials);
  };

  return (
    <section className="register-section">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="register-container d-flex justify-content-between">
              <div className="register-img">
                <img src={registerImg} alt="Register illustration" />
              </div>

              <div className="register-form">
                <div className="user-icon">
                  <img src={userIcon} alt="User icon" />
                </div>
                <h2 className="register-title">Register</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      id="userName"
                      placeholder="Username"
                      value={credentials.userName}
                      onChange={handleChange}
                      required
                      aria-label="Username"
                      className="form-control"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                      aria-label="Email"
                      className="form-control"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                      aria-label="Password"
                      className="form-control"
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary-btn auth-btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p className="login-prompt">
                  Already have an account?{' '}
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
