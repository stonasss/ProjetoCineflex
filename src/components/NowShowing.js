import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function NowShowing() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        request.then(response => {
            setMovies(response.data);
        });
    }, []);

    if (movies === 0) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <SectionTitle>
                Selecione o filme
            </SectionTitle>
            <Movies>
                {movies.map(movie => (
                    <Movie key={movie.id}>
                        <img src={movie.posterURL} alt={movie.title} />
                    </Movie>
                ))}
            </Movies>
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

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #FFFFFF;
`

const Movie = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: auto;
    margin-top: 15px;

        img {
            display: flex;
            margin: auto;
            width: 129px;
            height: 193px;
            padding: 8px;
        }
`