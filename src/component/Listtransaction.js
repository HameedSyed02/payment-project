import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
export default class Listtransaction extends Component {
  render() {
    return (
      <div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header> Transaction list</Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>SenderID</th>
                  <th>senderBIC</th>

                  <th>ReceiverNumber</th>
                  <th>ReceiverName</th>
                  <th>ReceiverBIC</th>
                  <th>Amount Transfered</th>

                  <th>TransferDate</th>
                  <th>Message</th>
                  <th>TransferType</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>no transaction avilable</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
