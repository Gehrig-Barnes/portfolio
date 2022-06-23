import React, {useState} from "react";
import { Container,  Row, Col } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

function Nav(){
    const navigate = useNavigate();
    return(
        <div>
            <Row>
                <Col><h3 onClick={() => navigate("/")}h3>Home</h3></Col>
                <Col><h3 onClick={() => navigate("/about")}>About</h3></Col>
                <Col><h3 onClick={() => navigate("/projects")}>Projects</h3></Col>
                <Col><h3 onClick={() => navigate("/contact")}>Contact</h3></Col>
            </Row>
        </div>
    )
};

export default Nav;