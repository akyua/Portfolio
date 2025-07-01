import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.png';
import './Navbar.scss';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home" className='nav-link'>Inicio</Nav.Link>
        <Nav.Link href="#aboutme" className='nav-link'>Sobre</Nav.Link>
        <Nav.Link href="#experience" className='nav-link'>Experiencias</Nav.Link>
        <Nav.Link href="#projects" className='nav-link'>Projetos</Nav.Link>
        <Nav.Link href="#skills" className='nav-link'>Habilidades</Nav.Link>
        <Nav.Link href="#contacts" className='nav-link'>Contatos</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;