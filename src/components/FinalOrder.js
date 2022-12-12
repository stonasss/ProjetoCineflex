import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FinalOrder({ order }) {
    const orderInfo = order;
    const seats = orderInfo.num
    console.log(orderInfo)

    return (
        <>
            <SuccessMSG>Pedido feito com sucesso!</SuccessMSG>

            <Subject>
                Filme e Sessão
                <Info>
                    <h1>{orderInfo.movie}</h1>
                    <h2>{orderInfo.date} {orderInfo.hour}</h2>
                </Info>
            </Subject>

            <Subject>
                Ingressos
                <Info>
                    {seats.map(seat => <h1 key={seat}>{`Assento ${seat}`}</h1>)}
                </Info>
            </Subject>

            <Subject>
                Comprador
                <Info>
                    <h1>Nome: {orderInfo.name}</h1>
                    <h2>CPF: {orderInfo.cpf}</h2>
                </Info>
            </Subject>

            <Link to={"/"}>
                <Return>
                    <p>Voltar pra Home</p>
                </Return>
            </Link>
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
`

const Subject = styled.div`
    margin: 0 0 40px 30px;
    color: #283945;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
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

const Return = styled.button`
    width: 220px;
    height: 42px;
    align-items: center;
    margin: 30px 0 0 75px;
    background-color: #E8833A;
    border-radius: 3px;
    border-color: #E8833A;
    padding: 0 42px 0 16px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-left: 25px;
        color: #ffffff;
    }
`