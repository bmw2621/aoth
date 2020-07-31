import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/characters" className="link-no-style">
              <Nav.Link className="ml-auto"as="span" eventKey="characters">
                Characters
              </Nav.Link>
            </Link>
            <NavDropdown title="Campaigns" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">LostMines of Phandelver</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
