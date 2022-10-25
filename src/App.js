import { Container } from "react-bootstrap";
import Login from "./component/Login/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import Home from "./component/Dashboard/Home";
import User from "./component/User/User";
import { useState} from "react";

function App() {
  const [userDetailsTable, SetUserDetailsTable] = useState([]);

  const handleAdd = (firstName, lastName, userName, status) => {
    let userDetails = {
      firstName,
      lastName,
      userName,
      status,
    };
    if (firstName && lastName && userName && status) {
      SetUserDetailsTable([...userDetailsTable, userDetails]);
    }
  };
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<Home userDetailsTable={userDetailsTable} />}
          />
          <Route path="/user" element={<User handleAdd={handleAdd} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
