import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Container} from 'reactstrap';
import xyz from './xyz.png';
import abcd from './abcd.jpg';
const Example = (props) => {
  return (
    <Container>
    <Row>
        
    <Col xs="6" style={{padding: "5% 1%"}}>
    <img src={xyz} style={{width: "70%"}}/>
    </Col>
    <Col xs="6" style={{padding: "5% 1%"}}>
    <Card body outline color="primary" style={{borderRadius:"10px"}}>
    <CardTitle tag="h5">Registration Form</CardTitle>
    <br/>
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Email" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter the Password" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Enter the Address"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <br/>
      <Button outline color="primary">Sign Up</Button>
    </Form>
    </Card>
    </Col>
   </Row>
    
    </Container>
  );
}

export default Example;
