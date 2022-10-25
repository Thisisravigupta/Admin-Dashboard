import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({ handleAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  return (
    <Form className="p-4 bg-info rounded">
      <Row>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              First Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                placeholder="firstname"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Last Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                placeholder="Last Name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              User Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                placeholder="username"
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                placeholder="Password"
                type="password"
                required
                value={password}
                autoComplete="true"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Address
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Gender
            </Form.Label>
            <Col sm="8">
              <Form.Select
                aria-label="Default select example"
                value={gender}
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Select</option>
                <option value="male">Male</option>
                <option value="female">female</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Status
            </Form.Label>
            <Col sm="8">
              <Form.Select
                aria-label="Default select example"
                value={status}
                required
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row className="p-2">
        <Button
          variant="primary"
          type="sumbit"
          className="button_css"
          width={100}
          onClick={() => handleAdd(firstName, lastName, userName, status)}
        >
          {firstName && lastName && userName && status ? (
            <Link to="/home">Add</Link>
          ) : (
            "Add"
          )}
        </Button>
      </Row>
    </Form>
  );
};

export default User;
