import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePicture } from './ProfilePicture';

export default {
  title: 'Basic/ProfilePicture',
  component: ProfilePicture,
  argTypes: {
    edit: {
      control: {
        options: [true, false],
        type: 'radio',
      },
    },
    src: {
      control: false,
    },
  },
} as ComponentMeta<typeof ProfilePicture>;

const Template: ComponentStory<typeof ProfilePicture> = (args) => <ProfilePicture {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  src: 'assets/images/profile/r.vogt.jpg',
  name: 'Robert Vogt',
  size: 'small',
};
export const NoImage = Template.bind({});
NoImage.args = {
  name: 'Robert Vogt',
  size: 'large',
};
