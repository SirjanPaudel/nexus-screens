import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Wrapper from '../assets/wrappers/Login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const Login = () => {
  const initialState = {

    name: '',
    email: '',
    password: '',
    isMember: true,
    
  }
  const [values, setValues] = useState(initialState);

  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value })
  }


  const onSubmit = (e) => {
    const { name, email, password, isMember } = values;
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out the all fields')
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return;
    }
    dispatch(registerUser({ name, email, password }))

  }
  const toggleMember = (e) => {
    e.preventDefault()
    setValues({ ...values, isMember: !values.isMember })
  }


  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);
  return (
    <>
      <Wrapper>
        <Form action='' onSubmit={onSubmit} className='login-box'  >
          { !values.isMember &&

            <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label className='font-weight-bold'>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name = 'name'
              onChange={handleChange}
              value= {values.name}
              />

          </Form.Group>
            }

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label className='font-weight-bold'>Email address</Form.Label>
            <Form.Control
              type="email"
              name='email'
              onChange={handleChange}
              value = {values.email}
              placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Label className='font-weight-bold'>Password</Form.Label>
            <Form.Control
              type="password"
              name='password'
              onChange={handleChange}
              value = {values.password}
              placeholder="Password" />

          </Form.Group>



          <Button type='submit' className='login-btn' colorScheme='gray' variant='outline'>
            {isLoading?'loading...':'Submit'}
          </Button>
          <div className='addUser'>

          <p>{values.isMember?'Not a member yet? ':'Already a member? '}
          <button onClick={toggleMember}>{values.isMember?' Register':' Login'}</button>
          </p>
          </div>
        </Form>

      </Wrapper>
    </>

  );


}

export default Login