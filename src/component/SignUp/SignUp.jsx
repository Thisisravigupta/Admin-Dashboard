import { useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import signup_user from "../../image/signup-user.png";
import "./SignUp.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let data = JSON.parse(localStorage.getItem("userDetails"));
  console.log(data)

  let userObj = {
    firstName: firstName,
    lastName: lastName,
    email_id: email,
    password: password,
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    userObj = {
      firstName: firstName,
      lastName: lastName,
      email_id: email,
      password: password,
    };
    if (firstName && lastName && email && password) {
      localStorage.setItem("userDetails", JSON.stringify(userObj));
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container className="signup rounded">
      <Stack className="bg-info p-1 d-flex justify-content-center rounded">
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={signup_user} alt="signup user" width={120} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="p-4">
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="3">
                  First Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="3">
                  Last Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Button
                variant="primary"
                type="sumbit"
                className="button_css mt-4"
                onClick={handleCreateAccount}
              >
                {firstName && lastName && email && password ? (
                  <Link to="/home">Create Account</Link>
                ) : (
                  "Create Account"
                )}
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="text-center">
          <p>
            Already have an account?
            {data ? (
              <Link to="/login">Log in</Link>
            ) : (
              <Link to="/">Log in</Link>
            )}
          </p>
        </Row>
      </Stack>
    </Container>
  );
}

export default SignUp;
