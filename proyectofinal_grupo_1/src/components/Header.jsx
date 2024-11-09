import { Navbar, Nav, NavDropdown, Dropdown, Container } from 'react-bootstrap';
import '../styles/Header.css';
// justify-content-end
function Header() {
    return (
        <>
            {/* Header */}
            <header className='header'>
                <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand className="logo" href="/">
                            <img src="/images/logo2.png" alt="Logo" width="45" height="45" />
                            {' '} <span>GRUPO 1</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                                <Nav.Link className="nav-link" href="/aboutUs">About Us</Nav.Link>
                                <NavDropdown id="basic-nav-dropdown" title="Proyectos">
                                    <Dropdown.Header>Nuestros Proyectos</Dropdown.Header>
                                    <NavDropdown.Item href="/imc">Indice de Masa Corporal</NavDropdown.Item>
                                    <NavDropdown.Item href="/billeterasVirtuales">Gestor de Transacciones de Billeteras Virtuales</NavDropdown.Item>
                                    <NavDropdown.Item href="/juegoPhaser">Juego Phaser</NavDropdown.Item>
                                    <NavDropdown.Item href="/desafioMatematico">Desafio Matematico</NavDropdown.Item>
                                    <NavDropdown.Item href="/juegoTateti">Juego Tateti</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            {/* End of Header */}
        </>
    )
}

export default Header