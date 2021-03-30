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
            {children}
            <Menu />
        </HeaderStyled>
    )
};

export default Header;