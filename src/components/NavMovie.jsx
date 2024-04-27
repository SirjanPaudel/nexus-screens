import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import Dropdownns from './Dropdownns';
import Wrapper from '../assets/wrappers/NavMovie';

const NavMovie = () => {
    return (
        <Wrapper>

            <Navbar expand="lg" className=" nav-movie ">
                <Container fluid>
                    <Logo />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-group"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-white mx-5' href="#action1">Home</Nav.Link>



                        </Nav>
                        <Dropdownns />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-3 "
                                aria-label="Search"
                            />
                            <Button className='me-5' variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Wrapper>
    )
}

export default NavMovie


