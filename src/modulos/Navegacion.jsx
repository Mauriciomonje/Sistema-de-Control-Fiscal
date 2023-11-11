import React from "react";
import { Nav, Card, CardHeader, Navbar, Container } from "react-bootstrap";

const navegacion = () => {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">SCF</Navbar.Brand>
                    <Nav className=" justify-content-end" >
                        <Nav.Link href=""className=" justify-content-end" >Terminar</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}
export default navegacion;