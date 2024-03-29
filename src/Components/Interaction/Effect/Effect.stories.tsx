import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ActionBackGroundColor } from '../../../models';
import { Effect } from './Effect';

export default {
  title: 'Composition/Effect',
  component: Effect,
  parameters: {
    backgrounds: { default: 'violet' },
  },
} as ComponentMeta<typeof Effect>;

const Template: ComponentStory<typeof Effect> = (args) => <Effect {...args} />;

export const Mumble = Template.bind({});
Mumble.args = {
  iconId: 'mumble',
  label: 'Mumble',
  size: 'large',
  effect: 'group-hover:scale-125 ease-out duration-500',
};

export const Settings = Template.bind({});
Settings.args = {
  iconId: 'settings',
  label: 'Settings',
  size: 'normal',
  squared: true,
  effect: 'group-hover:rotate-180 ease-out duration-500',
  backgroundColor: ActionBackGroundColor.DarkViolet,
};

export const Logout = Template.bind({});
Logout.args = {
  iconId: 'logout-start',
  secondaryIcon: 'logout',
  label: 'Logout',
  size: 'normal',
  squared: true,
  backgroundColor: ActionBackGroundColor.DarkViolet,
  effect: 'transition-all ease-in duration-800',
};
