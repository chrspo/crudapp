import React, {Component} from "react";
import AppNavbar from "./components/AppNavbar";
import {Button, Container} from "reactstrap";
import {Link} from "react-router-dom";

function Home (){
    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <Button color="link"><Link to="/clients">Clients</Link></Button>
            </Container>
        </div>
    )
}

export default Home;