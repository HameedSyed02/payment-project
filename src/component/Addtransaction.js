import React, { Component , useEffect} from 'react'
import Navigationbar from './Navigationbar'
import axios from 'axios';

export default class Addtransaction extends Component {

  constructor(props) {
    super(props)
    this.state = {
      receiveraccountholdernumber: "",
      receiveraccountholdername: "",
      amount: "",
      transferdate: "2022-08-10T11:35:14.396Z",
        message: {
        messagecode: "",
        },
      transfertypes: {
        transfertypecode: ""
      },
      senderbicBank: {
        bic: ""
      },
      receiverbicBank: {
        bic: "",
      },
      customer: {
        customerid: ""
      }
    }
    this.handleSubmit=this.handleSubmit.bind(this)
}
  rnamehandler = (event) => {
    this.setState({
        receiveraccountholdername: event.target.value
    })
}
rnumberhandler = (event) => {
    this.setState({
      receiveraccountholdernumber  : event.target.value
    })
}
amounthandler = (event) => {
    this.setState({
        amount : event.target.value
    })
}
 messageCodehandler = (event) => {
    this.setState({
      message: {
        messagecode: event.target.value
        }
      //  messagecode: event.target.value
    })
}
transferTypeCodehandler = (event) => {
    this.setState({
      transfertypes: {
        transfertypecode: event.target.value
      }
      // transfertypeCode: event.target.value
    })
}
// currencyCodehandler = (event) => {
//     this.setState({
//       receiverbicBank: {
//         bic: event.target.value
//       }
//       //  currencyCode: event.target.value
//     })
// }
   senderBIChandler = (event) => {
    this.setState({
      senderbicBank: {
        bic: event.target.value
      }
      // senderBIC: event.target.value
    })
}
 receiverBIChandler = (event) => {
    this.setState({
      receiverbicBank: {
        bic: event.target.value
      }
      //  receiverBIC: event.target.value
    })
}
customerIdhandler = (event) => {
    this.setState({
      customer: {
        customerid: event.target.value
      }
      //  customerId: event.target.value
    })
}
handleSubmit = (event) => {
   
   console.log(this.state);
   axios.post("http://localhost:8080/transaction/", this.state)


    // this.setState({
    //   receiveraccountholdernumber: "",
    //   receiveraccountholdername: "",
    //   amount: "",
    //     message: {
    //     messagecode: "",
    //     },
    //   transfertypes: {
    //     transfertypecode: ""
    //   },
    //   senderbicBank: {
    //     bic: ""
    //   },
    //   receiverbicBank: {
    //     bic: "",
    //   },
    //   customer: {
    //     customerid: ""
    //   }
    // })
 event.preventDefault()
    
}
  
  render() {
    return (
      <div>
        <Navigationbar/>
        <form onSubmit={this.handleSubmit}>
                    <h1>Transaction</h1>
                    <label>Sender   BIC :</label> <input type="text" value={this.state.senderBIC} onChange={this.senderBIChandler} placeholder="Sender BIC..." /><br />
                    <label>Customer ID:</label> <input type="text" value={this.state.customerId} onChange={this.customerIdhandler} placeholder="CustomerId..." /><br />
                    
                    <label>Receiver Account Holder Name:</label> <input type="text" value={this.state.receiveraccountholdername} onChange={this.rnamehandler} placeholder="Receiver Account Holder Name..." /><br />
                    <label>Receiver Account Holder Number :</label> <input type="text" value={this.state.receiveraccountholdernumber} onChange={this.rnumberhandler} placeholder="Receiver Account Holder Number..." /><br />
                    <label>Receiver BIC :</label> <input type="text" value={this.state.receiverBIC} onChange={this.receiverBIChandler} placeholder="Receiver BIC..." /><br />

                    <label>Amount :</label> <input type="text" value={this.state.amount} onChange={this.amounthandler} placeholder="Amount..." /><br />
                    <label>Message Code :</label><select onChange={this.messageCodehandler} defaultValue="Select MessageCode">
                        <option defaultValue>Select MessageCode</option>
                        <option value="CHQB">CHQB</option>
                        <option value="CORT">CORT</option>
                        <option value="HOLD">HOLD</option>
                        <option value="INTC">INTC</option>
                        <option value="PHOB">PHOB</option>
                        <option value="PHOI">PHOI</option>
                        <option value="PHON">PHON</option>
                        <option value="REPA">REPA</option>
                        <option value="SDVA">SDVA</option>
                    </select><br />
                   <label>Transfer Type Code :</label><select onChange={this.transferTypeCodehandler} defaultValue="Select Transfer Type Code">
                        <option defaultValue>Select Transfer Type Code</option>
                        <option value="Customer Transfer">Customer Transfer</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Bank Transfer for Own Account">Bank Transfer for Own Account</option>
                    </select><br />
                     {/* <label>Currency Code :</label><select onChange={this.currencyCodehandler} defaultValue="Select Currency Code">
                        <option defaultValue>Select Currency Code</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="jpy">JPY</option>
                    </select><br /> */}
                    <input  type="submit" value="Submit" />
                </form>
      </div>
    )
  }
}
