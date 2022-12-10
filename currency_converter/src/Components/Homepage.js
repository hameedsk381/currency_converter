import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

const Homepage = () => {
  return (
    <>
    <Navbar  bg="dark" variant="dark" >
      <Container>
      <Navbar.Text className=''>
            <Link to="/">Currency converter</Link>
          </Navbar.Text>
          <Navbar.Text className=''>
            <Link to="translist">Transaction list</Link>
          </Navbar.Text>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default Homepage