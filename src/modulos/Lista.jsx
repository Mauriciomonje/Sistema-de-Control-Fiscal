import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Lista() {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };
    return (
        <>
            <ListGroup>
                <ListGroup.Item action variant="primary">123</ListGroup.Item>
                <ListGroup.Item action variant="primary">333</ListGroup.Item>
                <ListGroup.Item action variant="primary">566</ListGroup.Item>
                <ListGroup.Item action variant="success">141</ListGroup.Item>
                <ListGroup.Item action variant="secondary">199</ListGroup.Item>
            </ListGroup>
            
        </>
    );
}

export default Lista;