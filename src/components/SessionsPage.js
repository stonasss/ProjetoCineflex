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
    }, []);

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

                        <Time>
                            {movie.showtimes.map(time => (
                                <Link to={`/assentos/${time.id}`}>
                                    <Button><p>{time.name}</p></Button>
                                </Link>
                            ))}
                        </Time>

                    </>
                ))}
            </Sessions>

            <Footer>
                <Content>
                    <Image>
                        <img src={footerInfo.posterURL} />
                    </Image>
                    <Text>
                        <h1>{footerInfo.title}</h1>
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

const Sessions = styled.div`
    margin: 10px 0 120px 25px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #293845;
    }
`

const Time = styled.div`
    width: 210px;
    display: flex;
    justify-content: space-between;
    margin: 20px 30px 20px 0;
`

const Button = styled.button`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    
    p {
        color: inherit;
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