import React, {useState, useContext} from 'react';
import {Col, Row, Form, Input, Button} from "reactstrap";
import {SetStateContext, StateContext} from "../providers/Provider";

function AddIngredient(){

    const setState = useContext(SetStateContext);
    const state = useContext(StateContext);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(){
        let newIngredient = {category: category, name: name, visible: true};
        const newIngredients = [...state.ingredients, newIngredient];
        setState({...state, ingredients: newIngredients})
        setName("");
        setCategory("");
    }

    return(
        <div>
            <Form onSubmit={e => {
                e.preventDefault();//nerefreshuje se díky tomu stránka
                handleSubmit();//odešle data přes enter
            }}>
                <Row>
                    <Col>
                        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
                    </Col>
                        
                    <Col>
                        <Input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category"/>
                    </Col>

                    <Col>  
                        <Button onClick={() => handleSubmit()}>Enter</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AddIngredient;