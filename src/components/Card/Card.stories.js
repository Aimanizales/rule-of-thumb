import React from 'react';
import Card from './index';

const CardComponent = () => <Card/>;

//๐ This default export determines where your story goes in the story list
const cardStory = {
    title: 'RoT/Content',
    component: CardComponent,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <CardComponent {...args} />;

export const cardTemplate = Template.bind({});

cardTemplate.args = {
    /*๐ The args you need here will depend on your component */
};

export default cardStory;
