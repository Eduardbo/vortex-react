import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
    background: black;
    color: #FFF;
    padding: 16px 32px;
    border: 2px solid black;
    font-size: 20px;
    cursor: pointer;   
    &:hover {
        background: #252525;
        border: 2px solid #252525;
    }
 `

export const VsbBotao = () => {
    return (
        <BotaoEstilizado>
                Comprar
        </BotaoEstilizado>
    )
}