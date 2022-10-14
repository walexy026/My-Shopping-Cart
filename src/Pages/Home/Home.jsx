import React, {useState, useEffect} from 'react'

import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
 
const Home = () => {
  return (
    <div style={{height:'100vh',width:'100%', background:'red'}}>
    <Container className='py-4'  >
<Row className='justify-content-center'>
    <Col xs={10} md={7} lg={6} xl={4} className ='mb-3 mx-a to text-center' >
        <h1 className='text-black my-5 '>Search Product
      </h1>
      <InputGroup className="mb-3">
        <InputGroup.Text>
        <BiSearch size='2rem'/>
        </InputGroup.Text>
        <FormControl
          placeholder="Username"
         
        />
      </InputGroup>

    </Col>
</Row>
    </Container>
    </div>
  )
}

export default Home