import React from 'react';
import StoryRouter from 'storybook-react-router';
import Menu from './index';

const MenuComponent = () => <Menu/>;

//👇 This default export determines where your story goes in the story list
const menuStory = {
    title: 'RoT/Top',
    component: MenuComponent,
    decorators: [StoryRouter()],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MenuComponent {...args} />;

export const menuTemplate = Template.bind({});

menuTemplate.args = {
    /*👇 The args you need here will depend on your component */
};

export default menuStory;
