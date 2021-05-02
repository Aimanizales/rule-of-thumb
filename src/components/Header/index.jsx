import React from 'react';
import styled from 'styled-components';
import Menu from "../Menu"; 

const HeaderStyled = styled.header`
    border: thin solid green;
    background-color: #ccc;
`

function Header ({ children }) {
    return (
        <HeaderStyled>
            <h1>Rule of Thumb</h1>
            {children}
            <Menu />
        </HeaderStyled>
    )
};

export default Header;