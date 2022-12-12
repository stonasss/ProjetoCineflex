import React from "react";
import styled from "styled-components";
import CineScreen from "./components/CineScreen";

export default function App() {
    return (
        <Screen>
            <CineScreen />
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    display: flex;
    flex-direction: column;
`