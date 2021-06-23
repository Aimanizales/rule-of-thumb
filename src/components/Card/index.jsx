import styled from 'styled-components';

const CardStyled = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.persianGreen || 'black'};
`;

function Card ({ name = "Sin nombre" }) {
    return (
        <CardStyled>
            {name}
        </CardStyled>
    );
};	

export default Card;
