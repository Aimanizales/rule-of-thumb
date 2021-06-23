import { React } from 'react';
import Card from '../Card';
import Main from './StyledCardsContainer';

function CardsContainer () {
    return (
        <Main>
            <Card name="Aiman" />
            <Card />
            <Card />
            <Card />
        </Main>
    )
};

export default CardsContainer;
