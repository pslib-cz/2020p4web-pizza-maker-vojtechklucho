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

import ChoosenFood from "./ChoosenFood";

function Order(){

    const food = window.location.href === "http://localhost:3000/order/pizza" ? "Pizza" : "Calzone";

    return(
        <div>
            <Row>
                <Col/>
                <Col><ChoosenFood food={food}/></Col>
                <Col/>
            </Row>

            <Row>
                <Col/>
                <Col></Col>
                <Col/>
            </Row>
        </div>
    );
}

export default Order;