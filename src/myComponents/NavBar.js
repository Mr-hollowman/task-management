import React,{useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown  from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function NavBar(props) {
    const [logoutBar,setLogoutBar]=useState(false)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Azure</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">contact</Nav.Link>
                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item> 
    </NavDropdown>*/}
                    <Nav.Link href="#" >
                    Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                    <img alt='profile_image' width='30px' height='30px' onClick={()=>setLogoutBar(!logoutBar)} style={{borderRadius:"50%"}} src='https://res.cloudinary.com/dcmztntur/image/upload/v1653543288/kdqepg7krzycnu9r1v3r.jpg'></img>
                    <div className={logoutBar?'logoutBox':'hideLogoutBar'}>
                    <img alt='profile_image' width='100px' height='100px' style={{borderRadius:"50%"}} src='https://res.cloudinary.com/dcmztntur/image/upload/v1653543288/kdqepg7krzycnu9r1v3r.jpg'></img>
                        {props.email}
                        <button className='button logout' onClick={props.handleLogout}>logout</button>
                    </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;