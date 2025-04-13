import Link from "next/link";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function MainNav() {
  const [expanded, setExpanded] = useState(false); // Controls navbar collapse

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      collapseOnSelect
      className="mb-4"
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Art Explorer
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/search" onClick={() => setExpanded(false)}>
              Search
            </Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                href="/favourites"
                onClick={() => setExpanded(false)}
              >
                Favourites
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
