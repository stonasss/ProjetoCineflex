import React from "react";
import styled from "styled-components";

export default function Footer(
    {
        poster,
        movieName,
        day,
        time
    } 
) {
    console.log(poster)

    return (
        <Container>
            <Content>
                <Image>
                    <img src={poster}/>
                </Image>
                <Text>
                    <h1>{movieName}</h1>
                    <h2>{day} - {time}</h2>
                </Text>
            </Content>
        </Container>

    )
}

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 117px;
    background-color: #dee6ec;
`

const Image = styled.div`
    width: 64px;
    height: 89px;
    margin: 14px 0 14px 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    align-items: center;

    img {
        padding: 8px;
        width: 48px;
        height: 72px;
    }
`

const Content = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.span`

    h1, h2 {
        margin-left: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
    }
`