import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Logo from './Logo';
const BarOfNav = () => {


  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container className='d-flex' fluid>
       <Logo/>



        <Button className='login-btn' colorScheme='gray' variant='outline'>
          Login
        </Button>

      </Container>
    </Navbar>
  );
}

export default BarOfNav

