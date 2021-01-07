import React from 'react';
import { useHistory } from "react-router-dom";
import Navigation from "./Navigation";
import { 
    Button,
    Row, 
    Col 
} from "reactstrap";

function NotFound(){
    const history = useHistory();
    return(
        <div>
            <Navigation />
            <Row>
                <Col>ERROR 404</Col>
            </Row>
            
            <Row>
                <Col>
                    <Button color="danger" onClick={() => { 
                        history.push("/");
                    }}>
                        Zpět na hlavní stránku
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default NotFound;