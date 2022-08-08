import React, { Component } from 'react';
export default class Addtransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            receiverAccountHolderName: "",
            receiverAccountHolderNumber: "",
            amount: "",
            messageCode: "",
            transfertypeCode:"",
            currencyCode:"",
            senderBIC:"",
            receiverBIC:"",
            customerId:"",  

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
      rnamehandler = (event) => {
        this.setState({
            receiverAccountHolderName: event.target.value
        })
    }
    rnumberhandler = (event) => {
        this.setState({
          receiverAccountHolderNumber  : event.target.value
        })
    }
    amounthandler = (event) => {
        this.setState({
            amount : event.target.value
        })
    }
     messageCodehandler = (event) => {
        this.setState({
           messageCode: event.target.value
        })
    }
    transferTypeCodehandler = (event) => {
        this.setState({
          transfertypeCode: event.target.value
        })
    }
    currencyCodehandler = (event) => {
        this.setState({
           currencyCode: event.target.value
        })
    }
       senderBIChandler = (event) => {
        this.setState({
          senderBIC: event.target.value
        })
    }
     receiverBIChandler = (event) => {
        this.setState({
           receiverBIC: event.target.value
        })
    }
    customerIdhandler = (event) => {
        this.setState({
           customerId: event.target.value
        })
    }
    handleSubmit = (event) => {
       
       console.log(this.state);
        this.setState({
            receiverAccountHolderName: "",
            receiverAccountHolderNumber: "",
            amount: "",
            messageCode: "",
            transferTypeCode:"",
            currencyCode: "",
            senderBIC: "",
            receiverBIC: '',
           customerId : "",
        })
     event.preventDefault()
        
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>Receiver Account Holder Name:</label> <input type="text" value={this.state.receiverAccountHolderName} onChange={this.rnamehandler} placeholder="Receiver Account Holder Name..." /><br />
                    <label>Receiver Account Holder Number :</label> <input type="text" value={this.state.receiverAccountHolderNumber} onChange={this.rnumberhandler} placeholder="Receiver Account Holder Number..." /><br />
                    <label>Amount :</label> <input type="text" value={this.state.amount} onChange={this.amounthandler} placeholder="Amount..." /><br />
                    <label>Message Code :</label><select onChange={this.messageCodehandler} defaultValue="Select MessageCode">
                        <option defaultValue>Select MessageCode</option>
                        <option value="chqb">CHQB</option>
                        <option value="cort">CORT</option>
                        <option value="hold">HOLD</option>
                        <option value="intc">INTC</option>
                        <option value="phob">PHOB</option>
                        <option value="phoi">PHOI</option>
                        <option value="phon">PHON</option>
                        <option value="repa">REPA</option>
                        <option value="sdva">SDVA</option>
                    </select><br />
                   <label>Transfer Type Code :</label><select onChange={this.transferTypeCodehandler} defaultValue="Select Transfer Type Code">
                        <option defaultValue>Select Transfer Type Code</option>
                        <option value="customertransfer">Customer Transfer</option>
                        <option value="banktransfer">Bank Transfer</option>
                        <option value="banktransferforown">Bank Transfer for Own</option>
                    </select><br />
                     <label>Currency Code :</label><select onChange={this.currencyCodehandler} defaultValue="Select Currency Code">
                        <option defaultValue>Select Currency Code</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="jpy">JPY</option>
                    </select><br />
                    <label>Sender   BIC :</label> <input type="text" value={this.state.senderBIC} onChange={this.senderBIChandler} placeholder="Sender BIC..." /><br />
                    <label>Receiver BIC :</label> <input type="text" value={this.state.receiverBIC} onChange={this.receiverBIChandler} placeholder="Receiver BIC..." /><br />
                    <label>Customer ID:</label> <input type="text" value={this.state.customerId} onChange={this.customerIdhandler} placeholder="CustomerId..." /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            
        )
    }
}

