import React from "react";
import styled from "styled-components";
import NowShowing from "./NowShowing"

export default function FrontPage() {
    return (
        <Screen>
            <NowShowing />
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`