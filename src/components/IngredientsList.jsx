import React, {useContext} from 'react';
import Ingredient from "./Ingredient";
import {StateContext} from "../providers/Provider";
import {ListGroup} from "reactstrap";

function IngredientsList(){
    const state = useContext(StateContext);

    function createIngredientsList(){
        return state.ingredients.map ((item, index) =>{
            if(item.visible){
                return(<Ingredient key={index} ingredient={item}/>);
            }
            return null;
        })
    }
    return(
        <ListGroup>
            {createIngredientsList()}
        </ListGroup>
    );
}

export default IngredientsList;