import styled from 'styled-components';

const CardStyled = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.persianGreen || 'black'};
`;

function Card () {
    return (
        <CardStyled>
            Card
        </CardStyled>
    );
};	

export default Card;
