import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo}/>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
        <Nav.Link href="#features" className='nav-link'>Features</Nav.Link>
        <Nav.Link href="#pricing" className='nav-link'>Pricing</Nav.Link>
        <Nav.Link href="#pricing" className='nav-link'>Pricing</Nav.Link>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;