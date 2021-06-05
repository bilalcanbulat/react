import React from 'react'
import {Container, Row, Col, Navbar} from "react-bootstrap";

function Footer() {
    const yil = new Date ().getFullYear;
    return (
        <Navbar fixed="bottom" fluid  className="mt-3 pt-4 d-flex justify-content-center bg-dark text-light">
            <p>Copyright © {yil} </p>
        </Navbar>
    )
}

export default Footer
