import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserData from "../UserData/UserData";
import "./Home.css";

const style = {
  height: "90vh",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "10px",
};

const btnStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "15px",
};

const Home = ({ userDetailsTable }) => {
  const [val, setValue] = useState("");
  const [filterVal, setFilterVal] = useState("Select");

  let originalarr = userDetailsTable
    // eslint-disable-next-line
    .filter((ele) => {
      if (val === "") {
        return ele;
      } else if (
        ele.userName.toLowerCase().includes(val) ||
        ele.firstName.toLowerCase().includes(val)
      ) {
        return ele;
      }
    })
    // eslint-disable-next-line
    .filter((ele) => {
      if (filterVal === "Select") {
        return ele;
      } else if (ele.status === filterVal) {
        return ele;
      }
    })
    .map((ele) => {
      return ele;
    });

  return (
    <Container style={style} className="bg-info">
      <Row className="Home_Row_css">
        <Col sm="2">
          <Button>
            <Link to="/user" style={btnStyle}>
              Add User
            </Link>
          </Button>
        </Col>
        <Col sm="5">
          <Form.Control
            placeholder="Search..."
            value={val}
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
        <Col sm="3">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3" style={{ marginRight: "8px" }}>
              Status
            </Form.Label>
            <Col>
              <Form.Select
                value={filterVal}
                onChange={(e) => setFilterVal(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
        <Col sm="2" className="d-flex justify-content-end align-items-start">
          <Button>
            <Link to="/login" style={btnStyle}>
              Logout
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className="Home_Row_css">
        <UserData userDetailsTable={originalarr} />
      </Row>
    </Container>
  );
};

export default Home;
