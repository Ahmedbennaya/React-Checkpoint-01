import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const firstName = "Ahmed";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {firstName && (
              <>
                <img
                  src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/347240984_6558379937547307_4719219808834246356_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=5gkitL1NdhQQ7kNvgEhlkL_&_nc_ht=scontent.ftun9-1.fna&oh=00_AYBozOfETMMLhKTyrVvvT4ByJBU3yojmq3C-bxqTEL0a2A&oe=66A74323"
                  alt="Greeting"
                  style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
                />
                <span style={{ color: 'white' }}>Hello, {firstName}!</span>
              </>
            )}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Top Price</Nav.Link>
            <NavDropdown title="Boutiques" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">La soukra</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Zahra</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">50929292</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
