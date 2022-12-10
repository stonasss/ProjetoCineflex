import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function SessionsPage(
    {
        setMovieName,
        setPoster,
        movieName,
        poster,
        day,
        time,
        setDay,
        setTime
    }
) {
    const { idFilme } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        req.then((response) => {
            setSelectedMovie(response.data.days);
            setPoster(response.data.posterURL);
            setMovieName(response.data.title)
        });
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
                        <Link to={`/assentos/${idFilme}`}>
                            <Button 
                                onClick={() => {setDay(movie.weekday); setTime(time.name)}}
                            >{time.name}</Button>
                        </Link>
                        </Time>
                    ))};
                </>
                ))}
            </Sessions>

            <Footer>
                <Content>
                    <Image>
                        <img src={poster}/>
                    </Image>
                    <Text>
                        <h1>{movieName}</h1>
                        <h2></h2>
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

const Sessions = styled.span`
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;

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