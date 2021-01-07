import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText, 
    Row, 
    Col
} from 'reactstrap';

import Navigation from "./Navigation";

function Order(){
    return(
        <div>
            <Navigation />
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h1">Pizza</CardTitle>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h1">Calzone</CardTitle>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h1">Ingredients</CardTitle>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Order;