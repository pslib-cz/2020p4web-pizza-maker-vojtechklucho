import React from 'react';

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

function ChoosenFood({food}){
    
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h1">{food}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default ChoosenFood;