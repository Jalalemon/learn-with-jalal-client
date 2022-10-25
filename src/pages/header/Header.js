import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
            <Navbar.Brand href="#home">
              <h3>Learn with Jalal</h3>
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
                    <h4> All Course</h4>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
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
                    <>
                      <h5 className="me-2"> {user?.displayName}</h5>
                      <Button variant="outline-light" onClick={handleLogOut}>
                        logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button variant="light">Login</Button>{" "}
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