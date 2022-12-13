import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [footerInfo, setFooterInfo] = useState([]);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        req.then((response) => {
            setSelectedMovie(response.data.days);
            setFooterInfo(response.data);
        });
        req.catch((err) => console.log(err.response.data));
    }, [idFilme]);

    return (
        <>
            <SectionTitle>
                Selecione o horário
            </SectionTitle>

            <Sessions>
                <>
                    {selectedMovie.map(movie =>
                    <div key={movie.id} data-test="movie-day">
                        <p>{movie.weekday} - {movie.date}</p>
                        <Time>
                            {movie.showtimes.map(time =>
                                <Link
                                    key={time.id}
                                    to={`/assentos/${time.id}`}
                                >
                                    <button
                                        data-test="showtime"
                                    >
                                    {time.name}</button>
                                </Link>
                            )}
                        </Time>
                    </div>
                    )}
                    </>
                
            </Sessions>

            <Footer data-test="footer">
                <Content>
                    <Image>
                        <img src={footerInfo.posterURL} alt={footerInfo.title} />
                    </Image>
                    <Text>
                        <h1>{footerInfo.title}</h1>
                    </Text>
                </Content>
            </Footer>
        </>
    )
}

const SectionTitle = styled.div`
    display: flex;
    margin: 70px auto 0 auto;
    padding: 50px 0 35px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #293845;
`

const Sessions = styled.div`
    margin: 10px auto 140px auto;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #293845;
    }

    @media only screen and (max-width: 375px) {
        widtH: 95%;
        margin: 15px auto 150px 20px;
    }
`

const Time = styled.div`
    width: 210px;
    display: flex;
    justify-content: space-between;
    margin: 20px 30px 20px 0;

    button {
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }
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