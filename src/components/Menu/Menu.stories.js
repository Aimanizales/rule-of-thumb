import React from 'react';

import Menu from './index';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Menu',
    component: Menu,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Jueputa!!',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
