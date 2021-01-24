import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';

const Example = (props) => {
  return (
    <Row style={{padding: "6% 5%"}}>
        <Col style={{margin: "8% 0%"}}>
            <h1>Welcome to the Recharge Portal made with React.js</h1>
        </Col>
    </Row>
  );
};

export default Example;