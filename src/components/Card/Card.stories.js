import React from 'react';
import Card from './index';

const CardComponent = () => <Card/>;

//👇 This default export determines where your story goes in the story list
const cardStory = {
    title: 'RoT/Content',
    component: CardComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CardComponent {...args} />;

export const cardTemplate = Template.bind({});

cardTemplate.args = {
    /*👇 The args you need here will depend on your component */
};

export default cardStory;
