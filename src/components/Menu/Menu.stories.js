import React from 'react';
import StoryRouter from 'storybook-react-router';
import Menu from './index';

const MenuComponent = () => <Menu/>;

//๐ This default export determines where your story goes in the story list
const menuStory = {
    title: 'RoT/Top',
    component: MenuComponent,
    decorators: [StoryRouter()],
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <MenuComponent {...args} />;

export const menuTemplate = Template.bind({});

menuTemplate.args = {
    /*๐ The args you need here will depend on your component */
};

export default menuStory;
