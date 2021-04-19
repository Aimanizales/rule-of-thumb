import React from 'react';
import StoryRouter from 'storybook-react-router';
import Menu from './index';

const MenuStory = () => <Menu/>;

//👇 This default export determines where your story goes in the story list
const myMenu = {
  title: 'Menu',
  component: MenuStory,
  decorators: [StoryRouter()],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MenuStory {...args} />;

export const NormalMenu = Template.bind({});
export default myMenu;

NormalMenu.args = {
  /*👇 The args you need here will depend on your component */
};