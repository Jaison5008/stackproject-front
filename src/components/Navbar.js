//import { useState } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavScrollExample(props) {  
  const[key,setKey]=useState('') 
  
  const navi=useNavigate(); 
  
  props.keyHandler(key)
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"> Stack project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
         
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">about</Nav.Link>
             <Nav.Link href="/">Details</Nav.Link> 
            <Button  variant="outline-secondary"onClick={()=>navi("/Login")}>login</Button> 
            <Button variant="outline-secondary" onClick={()=>navi("/Signup")} style={{marginLeft:"5px",marginRight:"5px"}}>sign up</Button> 
            <Button variant="outline-secondary"onClick={()=>{navi('/');localStorage.clear()}}>logout</Button> 
          </Nav>
          <Form className="d-flex" >
            <Form.Control 
            onChange={(e)=>{setKey((e.target.value));}}
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
             
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;