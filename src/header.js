import React from 'react';
import { Container, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import logo from './img/logo.png';

function Header() {
    return (
        <Container>
            <Row>
                <Col xs={2}><a href='/'><img src={logo} alt="Logo" className="icono"/></a></Col>
                <Col xs={4}>
                    <InputGroup className="mb-5">
                        <FormControl
                            placeholder="Buscar..."
                            aria-label="Buscar..."
                            aria-describedby="basic-addon2"
                        />
                    
                    </InputGroup>
                </Col>
                <Col xs={2}>
                    <Button className="btn btn-primary"> Reviews </Button>
                </Col>
                <Col xs={2}>
                    <Button className="btn btn-primary"> Orders </Button> 
                </Col>
                <Col xs={2}>
                    <Button className="btn btn-primary"> Cuenta </Button>                
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default Header;
  