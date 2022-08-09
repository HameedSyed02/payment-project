import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
export default class Addtransaction extends Component {
  constructor(props){
      super(props);
      this.state= {senderid:"", senderbic:"", receivername:"", receivernumber:"", receiverbic:"", message:"", transfertype:"", Amount:""}
  }
  submittransaction(event){
      alert(this.state.Amount);
      event.preventDefault();
  }

    render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add Transaction</Card.Header>
          <Form onSubmit={this.submittransaction} id="addtransactionid">
        <Card.Body>
            <Form.Group as={Col}>
              <Form.Label>SenderID</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter sender id"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>SenderBiC</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter senderbic"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Receiver Name</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter receiver name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Receiver account number</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter receiver account number"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Receiver bic</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter receiverbic "
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter message code"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Transfer type</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter Transfer type code"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Ammount to be transfered</Form.Label>
              <Form.Control
                type="text"
                className={"bg-dark text-white"}
                placeholder="Enter Amount"
              />
            </Form.Group>

        </Card.Body>
        <Card.Footer style={{"textAlign":"right"}}>
          <Button size="sm" variant="success" type="submit">
            Submit
          </Button>
        </Card.Footer>
        </Form>
      </Card>
      
    );
  }
}