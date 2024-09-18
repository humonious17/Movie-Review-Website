import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-bootstrap";
export default function Header() {
    return (
        <div >
            <Navbar style={{"top" : "10px"}}fixed= "top" expand ="lg" bg="transparent">
                <Container fluid>
                    <Navbar.Brand style={{"color" : "gold"}}>
                    Gold
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll>
                            
                            <NavLink style={{"color" : "beige"}}className="nav-link" to="/">Home</NavLink>
                            <NavLink style={{"color" : "beige"}}className="nav-link" to="/watchList">Watchlist</NavLink>
                        </Nav>
                        <Button style={{"marginRight" : "10px"}}variant="outline-light">Login</Button>
                        <Button variant="outline-light">Register</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}