import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([])

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        req.then((response) => {setSelectedMovie(response.data.days);});
        req.catch((err) => console.log(err.response.data));
        }, []);

        console.log(selectedMovie)

        if (selectedMovie === 0) {
            return <div>Carregando...</div>
        }

    return (
        <>
            <SectionTitle>
                Selecione o horário
            </SectionTitle>
            <Sessions>
                {selectedMovie.map(movie => (
                <>
                    <p>{movie.weekday} - {movie.date}</p>
                    {movie.showtimes.map(time => (
                        <Time>
                            <Button>{time.name}</Button>
                        </Time>
                    ))};
                </>
                ))}
            </Sessions>
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

const Sessions = styled.span`
    display: flex;
    flex-direction: column;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #293845;
    }
`

const Time = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 5px 30px 20px;
`

const Button = styled.button`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
`