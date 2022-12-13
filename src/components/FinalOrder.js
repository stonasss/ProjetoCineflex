import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FinalOrder({ order }) {
    const orderInfo = order;
    const seats = orderInfo.num

    return (
        <>
            <SuccessMSG>Pedido feito com sucesso!</SuccessMSG>

            <SubjectMovie>
                <span data-test="movie-info">
                Filme e Sessão
                <Info>
                    <h1>{orderInfo.movie}</h1>
                    <h2>{orderInfo.date} {orderInfo.hour}</h2>
                </Info>
                </span>
            </SubjectMovie>

            <SubjectSeat data-test="seats-info">
                <span data-test="seats-info">
                Ingressos
                <Info>
                    {seats.map(seat => <h1 key={seat}>{`Assento ${seat}`}</h1>)}
                </Info>
                </span>
            </SubjectSeat>

            <SubjectInfo data-test="client-info">
                <span data-test="client-info">
                Comprador
                <Info>
                    <h1>Nome: {orderInfo.name}</h1>
                    <h2>CPF: {orderInfo.cpf}</h2>
                </Info>
                </span>
            </SubjectInfo>

            <Return>
            <Link to={"/"}>
                <button data-test="go-home-btn">
                    <p>Voltar pra Home</p>
                </button>
            </Link>
            </Return>
        </>
    )
}

const SuccessMSG = styled.div`
    width: 180px;
    height: 100px;
    margin: 100px auto 0 auto;
    font-family: 'Roboto';
    font-style: normal;
    color: #257b6b;
    font-weight: 700;
    font-size: 24px;
    text-align: center;

    @media only screen and (max-width: 375px) {
        margin-left: auto;
        margin-right: auto;
    }
`

const SubjectMovie = styled.div`
    widtH: 400px;
    margin: 0 auto 40px auto;
    color: #283945;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    @media only screen and (max-width: 375px) {
        margin-left: 30px;
    }
`

const SubjectSeat = styled.div`
    widtH: 400px;
    margin: 0 auto 40px auto;
    color: #283945;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    @media only screen and (max-width: 375px) {
        margin-left: 30px;
    }
`

const SubjectInfo = styled.div`
    widtH: 400px;
    margin: 0 auto 40px auto;
    color: #283945;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    @media only screen and (max-width: 375px) {
        margin-left: 30px;
    }
`

const Info = styled.div`
    padding-top: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    h2 {
        padding-top: 4px;
    }
`

const Return = styled.div`
    display: flex;
    margin: 0 auto 0 auto;

    button {
        width: 220px;
        height: 42px;
        align-items: center;
        margin-right: auto;
        background-color: #E8833A;
        border-radius: 3px;
        border-color: #E8833A;
        padding: 0 42px 0 16px; 
}

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-left: 25px;
        color: #ffffff;
    }

    @media only screen and (max-width: 375px) {
        margin: 0 50px 0 80px;
    }
`