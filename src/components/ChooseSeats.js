import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export default function ChooseSeats(
    {
        movieName,
        poster,
        day,
        time
    }
) {
    const { idFilme } = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idFilme}/seats`);

        req.then((response) => {
            setSeats(response.data.seats);
        });
        req.catch((err) => console.log(err.response.data));
    }, []);

    console.log(seats)

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
            <Footer
                movieName={movieName}
                poster={poster}
                day={day}
                time={time}
            />
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