import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from './images.jpeg'
import { AuthContext } from '../../Contexts/AuthProvider';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(errr => console.error(errr))
    }


    return (
      <div className="mb-5">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
              <Image
                style={{ height: "40px" }}
                roundedCircle
                src={img}
              ></Image>
            <Navbar.Brand href="#home">
              <h3 className='ms-4'>Learn with Jalal</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">
                  <Link
                    className="text-white variant"
                    variant="outline-light"
                    to="/"
                  >
                    <h5> All Course</h5>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">FAQ</Nav.Link>
                <Nav.Link href="#pricing">Dark</Nav.Link>
                <NavDropdown title="All Course" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <>
                  {user?.uid ? (
                    <div className='d-flex align-items-center'>
                      <h5 className="me-2"> {user?.displayName}</h5>
                      <Button variant="outline-light" onClick={handleLogOut}>
                        logout
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button className='mb-2' variant="light">Login</Button>{" "}
                      </Link>
                      <Link to="/register">
                        <Button variant="light"> Register</Button>{" "}
                      </Link>
                    </>
                  )}{" "}
                </>
                <Nav.Link eventKey={2} href="#memes">
                  {user?.photoURL ? (
                    <Image
                      style={{ height: "40px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;