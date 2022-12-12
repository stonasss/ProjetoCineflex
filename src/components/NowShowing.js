import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function NowShowing() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        request.then(response => {
            setMovies(response.data);
        });
    }, []);

    if (movies === 0) {
        return (
            <Wait>
                Carregando ...
            </Wait>
        )
    }

    return (
        <>
            <SectionTitle>
                Selecione o filme
            </SectionTitle>
            <Movies>
                {movies.map(movie => (
                    <Link key={movie.title} to={`/sessoes/${movie.id}`}>
                        <Movie data-test="movie">
                            <img src={movie.posterURL} alt={movie.title} />
                        </Movie>
                    </Link>
                ))}
            </Movies>
        </>
    )
}

const Wait = styled.div`
    display: flex;
    margin: auto;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 18px;
`

const SectionTitle = styled.div`
    display: flex;
    margin: 70px auto 0 auto;
    padding: 50px 0 35px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #293845;

    @media only screen and (max-width: 375px) {
        margin: 75px auto 0 auto;
    }
`

const Movies = styled.div`
    width: 70%;
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 100px;
    flex-wrap: wrap;
    align-items: center;
    background-color: #FFFFFF;
    
    @media only screen and (max-width: 375px) {
        widtH: 90%;
    }
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