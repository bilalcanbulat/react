import React from "react";
import data from "./data";
import {Card, Button, Container, Row, Col} from "react-bootstrap";

function Kart(props) {
    const {id, isim, text, img} = data[props.id];
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{isim}</Card.Title>
    <Card.Text> {text} </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}


function Main() {
    return (
        <div>
           <Container className="text-center mt-4">
<Row className="d-flex">
    <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
    <Kart id="0"/>
    </Col>
    <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
    <Kart id="1"/>
    </Col>
    <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
    <Kart id="2"/>
    </Col>
</Row>
        </Container>
            
        </div>
    )
}

export default Main
