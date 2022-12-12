import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ChooseSeats({setOrder}) {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setselectedSeats] = useState([]);
    const [seatNumber, setSeatNumber] = useState([]);
    const [movie, setMovie] = useState("");
    const [footerInfo, setFooterInfo] = useState([]);
    const [day, setDay] = useState([]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState([]);
    const [state, setState] = useState("#C3CFD9");
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const [hour, setHour] = useState("")
    const next = useNavigate();

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        req.then((response) => {
            setSeats(response.data.seats);
            setFooterInfo(response.data.movie);
            setTime(response.data.day);
            setDay(response.data);
            setMovie(response.data.movie.title);
            setDate(response.data.day.date);
            setHour(response.data.name);
            console.log();
        });
        req.catch((err) => console.log(err.response.data));
    }, [idSessao]);

    if (seats === 0) {
        return <div>Carregando...</div>
    }

    function selectSeat(seat) {
        if (seat.isAvailable === false) {
            alert('O assento escolhido não está disponível')

        } else if (selectedSeats.includes(seat.id) && state === "#1AAE9E") {
            setselectedSeats(selectedSeats.filter(clicked => clicked !== seat.id));
            setSeatNumber(selectedSeats.filter(clicked => clicked !== seat.name));

        } else {
            setselectedSeats([...selectedSeats, seat.id])
            setSeatNumber([...seatNumber, seat.name])
            setState("#1AAE9E")

        }
    }

    function completeOrder(event){
        event.preventDefault();

        axios.post(
            "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
                ids: selectedSeats,
                name: name,
                cpf: CPF
            }).then(res => {
                setOrder({
                    movie:{movie},
                    date:{date},
                    hour:{hour},
                    num:{seatNumber},
                    name:{name},
                    cpf:{CPF}
                })
                next("/sucesso")
            }).catch(err => {
                console.log(err)
            });
    }

    return (
        <>
            <SectionTitle>
                Selecione os assentos
            </SectionTitle>
            <Seats>
                {seats.map(seat => {
                    return seat.isAvailable === false ? (
                        <Seat 
                            key={seat.id}
                            background={"#FBE192"}
                            onClick={() => selectSeat(seat)}
                        >{seat.name.padStart(2, '0')}</Seat>
                    ) : (
                        <Seat 
                            key={seat.id} 
                            background={selectedSeats.includes(seat.id) ? state : "#C3CFD9"}
                            onClick={() => selectSeat(seat)}
                        >{seat.name.padStart(2, '0')}</Seat>
                    );
                })}
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

            <Personal>
                <p>Nome do comprador:</p>
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={event => setName(event.target.value)}
                ></input>
                <p>CPF do comprador:</p>
                <input
                    type="text"
                    placeholder="Digite seu CPF..."
                    value={CPF}
                    onChange={event => setCPF(event.target.value)}
                ></input>
            </Personal>

            <Finish onClick={completeOrder}>
                <p>Reservar assento(s)</p>
            </Finish>

            <Footer>
                <Content>
                    <Image>
                        <img src={footerInfo.posterURL} alt={footerInfo.title}/>
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
    background: ${props => props.background};
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

const Personal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 25px 20px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color: #293845;
        line-height: 42px;
    }

    input {
        width: 320px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        padding-left: 8px;
        font-size: 16px;
    }
`

const Finish = styled.button`
    width: 225px;
    height: 42px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background-color: #E8833A;
    border-radius: 3px;
    border-color: #E8833A;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-left: 25px;
        color: #ffffff;
    }
`