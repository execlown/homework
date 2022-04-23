import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container fluid className='bg-dark d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <img src='' alt='404 Page Not Found' />
      <Link className='text-decoration-none link-info mt-4 fs-4' to="/">Redirect to Homepage</Link>
    </Container>
  )
}

export default NotFound