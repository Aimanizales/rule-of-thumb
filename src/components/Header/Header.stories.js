import React from 'react';
import StoryRouter from 'storybook-react-router';
import Header from './index';

const HeaderComponent = () => <Header/>;

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Top',
    component: HeaderComponent,
    decorators: [StoryRouter()],
};

// const Template = (args) => <HeaderComponent {...args} />;

// export const headerTemplate = Template.bind({});
// headerStory;

// headerTemplate.args = {
    /*👇 The args you need here will depend on your component */
// };