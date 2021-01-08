import React from 'react';
import IngredientList from "./IngredientsList";
import AddIngredient from "./AddIngredient";

function Ingredients(){
  

    return(
        <div> 
            <AddIngredient/>
            <IngredientList/>
        </div>
    );
}

export default Ingredients;