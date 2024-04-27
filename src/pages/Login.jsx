import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Wrapper from '../assets/wrappers/Login';
import { Logo } from '../components';
const Login = () => {

  return (
    <>
    <Wrapper>
        
        <Form className='login-box' >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label  className='font-weight-bold'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='font-weight-bold'>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>


          <Button className='login-btn' colorScheme='gray' variant='outline'>
          Login
        </Button>
        </Form>
    
      </Wrapper>
    </>

  );


}

export default Login