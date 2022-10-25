import React, { memo } from "react";
import { Table } from "react-bootstrap";

const tableHead = ["S no.", "User Name", "First Name", "Last Name", "Status"];

const UserData = ({ userDetailsTable }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {tableHead.map((ele, ind) => {
            return <td key={ind}>{ele}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {userDetailsTable.map((ele, ind) => {
          return (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{ele.userName}</td>
              <td>{ele.firstName}</td>
              <td>{ele.lastName}</td>
              <td>{ele.status}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default memo(UserData);
