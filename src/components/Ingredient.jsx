import React from 'react';
import {ListGroupItem, Row, Col} from "reactstrap";

function Ingredient({ingredient}){
    return(
        <ListGroupItem>
            <Row>
                <Col>{ingredient.name}</Col>
                <Col>{ingredient.category}</Col>
            </Row>
        </ListGroupItem>
    );
}

export default Ingredient;