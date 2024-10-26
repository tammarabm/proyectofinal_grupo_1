import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Layout(){
    return (
        <>
        <header>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/"> <img src="/images/logo2.png" alt="Logo" width="42" height="43" className="d-inline-block align-top"/> <span className="fs-4">GRUPO 1</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <NavDropdown title="Más" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Indice de Masa Corporal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gestor de Transacciones de Billeteras Virtuales</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Juego Phaser</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"> Desafio Matemático </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>

        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <h2> Esto es el footer </h2>
        </footer>
        
    </>
    )

}
export default Layout;