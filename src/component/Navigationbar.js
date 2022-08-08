import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Navigationbar() {
        return (
            
        <Navbar bg="dark" >
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="me-auto">
            <Link to="/"><button>Home</button></Link> 
            <Link to="/transaction"><button>Add Transaction</button></Link>
            <Link to="/listtransaction"><button>Transaction list</button></Link>
        </Nav>
        </Navbar>
            
        )
    
}

export default Navigationbar;
