import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Container} from 'reactstrap';
import xyz from './xyz.png';
import abcd from './abcd.jpg';
const Example = (props) => {
  return (
    <Container>
     <Row style={{padding: "9% 0%"}}>
      <Col sm="6" style={{padding:"1% 1%"}}>
        <Card body outline color="primary" style={{borderRadius:"15px"}}>
        <CardTitle tag="h5">Not a Member?</CardTitle>
        <center><p style={{color:"gray"}}>Signup Here</p></center>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup style={{textAlign:"left"}}>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup style={{textAlign:"left"}}>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Enter the Password" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup style={{textAlign:"left"}}>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" name="address" id="exampleAddress" placeholder="Enter the Address"/>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup style={{textAlign:"left"}}>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup style={{textAlign:"left"}}>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState"/>
                </FormGroup>
              </Col>
              <Col md={2} style={{textAlign:"left"}}>
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
      <Col sm="6" style={{padding:"1% 1.5%"}}>
        <Card body outline color="primary" style={{borderRadius:"15px"}}>
        <CardTitle tag="h5">Already a Member?</CardTitle>
        <center><p style={{color:"gray"}}>Signin Here</p></center>
          <br/>
          <Form>
                <FormGroup style={{textAlign:"left"}}>
                  <Label for="exampleEmail1">Username</Label>
                  <Input type="email" name="" id="exampleEmail1" placeholder="Enter the Username" />
                </FormGroup>
              
                <FormGroup style={{textAlign:"left"}}>
                  <Label for="examplePassword1">Password</Label>
                  <Input type="password" name="" id="examplePassword1" placeholder="Enter the Password" />
                </FormGroup>
            <FormGroup check style={{textAlign:"left"}}>
              <Label check>
                <Input type="checkbox" />{' '}
                Remember Me
              </Label>
            </FormGroup>
            <br/><br/>
            <Button outline color="primary">Sign In</Button>
          
          </Form>
        </Card>
      </Col>
    </Row>
   
    
    </Container>
  );
}

export default Example;
