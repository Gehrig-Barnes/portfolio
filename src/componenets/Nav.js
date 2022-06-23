import React, {useState} from "react";
import { Container,  Row, Col } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

function Nav(){
    const navigate = useNavigate();
    return(
        <div>
            <Row >
                <Col>
                    <h3 onClick={() => navigate("/")}h3 className="routes">Home</h3>
                </Col>
                <Col>
                    <h3 onClick={() => navigate("/about")} className="routes">About</h3>
                </Col>
                <Col>
                    <h3 onClick={() => navigate("/projects")} className="routes">Projects</h3>
                </Col>
                <Col>
                    <h3 onClick={() => navigate("/contact")} className="routes">Contact</h3>
                </Col>
            </Row>
        </div>
    )
};

export default Nav;