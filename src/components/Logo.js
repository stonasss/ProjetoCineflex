import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Container>
            <Title>
                <Link to="/">
                <p>CINEFLEX</p>
                </Link>
            </Title>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    align-items: center;
    background-color: #C3CFD9;
    padding: 14px 0 14px 0;
`

const Title = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    text-align: center;
    color: #e8833a;
    
    a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }
`