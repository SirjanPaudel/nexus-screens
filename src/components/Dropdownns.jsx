import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'

const Dropdownns = () => {
    return (
        <Dropdown className='me-5'>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Login
          </Dropdown.Toggle>
    
          <Dropdown.Menu >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
}

export default Dropdownns