import React, {useState, useContext} from 'react';
import {ListGroupItem, Row, Col, Button} from "reactstrap";
import {SetStateContext, StateContext} from "../providers/Provider";

function Ingredient({ingredient}){
    const isInIngredients = window.location.href === "http://localhost:3000/ingredients" ? true : false;

    const setState = useContext(SetStateContext);
    const state = useContext(StateContext);

    const [number, setNumber] = useState(0);


    function handleClick(){
        let numberOfIngredients = number;
        let newIngredients = [...state.ingredients ];
        newIngredients.forEach(item => {

            if(item.category === ingredient.category){
                item.visible = false;
                setNumber(numberOfIngredients+1);

            }
        }) 
        console.log(number);
        if(number > 3){
            alert("Maximální počet ingrediencí jsou 4.");
            return;
        }
        setState({...state, ingredients: newIngredients});
    }

    function renderButton(){
        if(isInIngredients){
            return;
        }  
        return (
            <Col><Button onClick={() => handleClick()}>Vybrat</Button></Col>
        )
    }
    return(
        <ListGroupItem>
            <Row>
                <Col>{ingredient.name}</Col>
                <Col>{ingredient.category}</Col>
                {renderButton()}
            </Row>
        </ListGroupItem>
    );
}

export default Ingredient;