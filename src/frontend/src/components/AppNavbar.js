import React, {useState} from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";

function AppNavbar (props){
    const [isOpen, setOpen] = useState(false)

    function toggle(){
        setOpen(!isOpen)
    }

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        </Navbar>
    )
}

export default AppNavbar



