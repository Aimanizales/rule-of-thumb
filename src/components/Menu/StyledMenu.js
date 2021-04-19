import styled from 'styled-components';

const StyledMenu = styled.nav`
    border: thin solid blue;

    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;

        li{
            border: thin solid;
        }
    }
`;

export default StyledMenu;
