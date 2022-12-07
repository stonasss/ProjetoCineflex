import React from "react";
import styled from "styled-components";

export default function Logo() {
    return (
        <Container>
            <Title>
                CINEFLEX
            </Title>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    align-items: center;
    background-color: #C3CFD9;
    padding: 12px 0 12px 0;
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
`