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
    return(
        <div>
            <Row>
                <Col>
                    
                </Col>
                <Col>
                    <ChoosenFood/>
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </div>
    );
}

export default Order;