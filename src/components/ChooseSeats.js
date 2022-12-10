import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ChooseSeats() {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);
    const [footerInfo, setFooterInfo] = useState([]);
    const [day, setDay] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        req.then((response) => {
            setTime(response.data.day);
            setDay(response.data);
            setSeats(response.data.seats);
            setFooterInfo(response.data.movie);
        });
        req.catch((err) => console.log(err.response.data));
    }, [idSessao]);

    if (seats === 0) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <SectionTitle>
                Selecione os assentos
            </SectionTitle>
            <Seats>
                {seats.map(seat => (
                    <Seat>{seat.name}</Seat>
                ))}
            </Seats>
            <SeatTypes>
                <Green>
                    <GnCircle></GnCircle>
                    <SeatText>Selecionado</SeatText>
                </Green>
                <Gray>
                    <GyCircle></GyCircle>
                    <SeatText>Disponível</SeatText>
                </Gray>
                <Yellow>
                    <YwCircle></YwCircle>
                    <SeatText>Indisponível</SeatText>
                </Yellow>
            </SeatTypes>

            <Footer>
                <Content>
                    <Image>
                        <img src={footerInfo.posterURL} />
                    </Image>
                    <Text>
                        <h1>{footerInfo.title}</h1>
                        <h2>{time.weekday} - {day.name}</h2>
                    </Text>
                </Content>
            </Footer>
        </>

    )
}

const SectionTitle = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 0 35px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #293845;
`

const Seats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const Seat = styled.button`
    width: 26px;
    height: 26px;
    margin: 5px 0 14px 9px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    align-items: center;
    text-align: center;
`

const SeatTypes = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: auto;
`

const SeatText = styled.p`
    margin-top: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
`

const Green = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Gray = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Yellow = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GnCircle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    background-color: #1AAE9E;
`

const GyCircle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    background-color: #C3CFD9;
`

const YwCircle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    background-color: #FBE192;
`

const Footer = styled.footer`
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