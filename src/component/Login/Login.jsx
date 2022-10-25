import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../../image/user.png";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let data = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <Container className="login rounded">
      <Stack className="bg-info p-1 d-flex justify-content-center rounded">
        <Row>
          <Col className="d-flex justify-content-center">
            <img variant="top" src={user} alt="user" width={120} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="p-4">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Your Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="Your Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Button
                variant="primary"
                type="sumbit"
                className="button_css mt-3"
              >
                {data.email_id === loginEmail &&
                data.password === loginPassword ? (
                  <Link to="/home">Login</Link>
                ) : (
                  "Login"
                )}
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="text-center">
          <p>
            Don't have an account? <Link to="/">Sign up</Link>
          </p>
        </Row>
      </Stack>
    </Container>
  );
}

export default Login;
