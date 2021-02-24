import React, { useState } from 'react'
import './calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculadora() {

  const [txtNumbers, setTxtNumbers] = useState('0')

  function addNumber(number) {
    setTxtNumbers(txtNumbers + number)
  }
  // função que concatena os números digitados (number) e exibe no campo input (txtNumeros)

  function defineOperation(op) {
    setTxtNumbers(op)
  }
  // função que pega os operadores (+, -, / e *)
  
  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant='danger'>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control 
              type='text' 
              name='textNumbers' 
              className='text-right' 
              readOnly='readonly' 
              value={txtNumbers}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='light' value='7' onClick={() => addNumbergi}>7</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => addNumber('8')}>8</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => addNumber('9')}>9</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => defineOperation('/')}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='light' onClick={() => addNumber('4')}>4</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => addNumber('5')}>5</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => addNumber('6')}>6</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => defineOperation('*')}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='light' onClick={() => addNumber('1')}>1</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => addNumber('2')}>2</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => addNumber('3')}>3</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => defineOperation('-')}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='light' onClick={() => addNumber('0')}>0</Button>
          </Col>
          <Col>
            <Button variant='light'>.</Button>
          </Col>
          <Col>
            <Button variant='success'>=</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => defineOperation('+')}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
