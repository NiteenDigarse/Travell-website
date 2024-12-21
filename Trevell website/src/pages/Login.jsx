import React, { useState } from 'react';
import '../styles/login.css';

import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Add logic to handle login (API call, form validation, etc.)
    console.log('Logging in with:', credentials);
  };

  return (
    <section className="login-section">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login-container d-flex justify-content-between">
              <div className="login-img">
                <img src={loginImg} alt="Login illustration" />
              </div>

              <div className="login-form">
                <div className="user-icon">
                  <img src={userIcon} alt="User icon" />
                </div>
                <h2 className="login-title">Login</h2>
                <Form onSubmit={handleSubmit}>
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
                    Login
                  </Button>
                </Form>
                <p className="signup-prompt">
                  Don't have an account?{' '}
                  <Link to="/register" className="signup-link">
                    Create
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

export default Login;
