import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Nav>
                    <Nav.Link as={Link} to="/" className="links">Currencies</Nav.Link>
                    <Nav.Link as={Link} to="/convert" className="links">Convert</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        ANS Developer Front-End Technical Test
                    </Navbar.Text>     
                </Navbar.Collapse> 
            </Container>  
        </Navbar>
    );
}
