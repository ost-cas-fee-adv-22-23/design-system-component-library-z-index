import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserWidget } from './UserWidget';

export default {
  title: 'Composition/UserWidget',
  component: UserWidget,
} as ComponentMeta<typeof UserWidget>;

const Template: ComponentStory<typeof UserWidget> = (args) => <UserWidget {...args} />;

const TemplateRow: ComponentStory<typeof UserWidget> = (args) => (
  <div className="flex flex-row items-center justify-around">
    <div className="p-2 w-56">
      <UserWidget src="assets/images/profile/r.vogt.jpg" name="Damian Caduff" username="damiancaduff" />
    </div>
    <div className="p-2 w-56">
      <UserWidget src="assets/images/profile/r.vogt.jpg" name="Robert Vogt" username="robertvogt" />
    </div>
    <div className="p-2 w-56">
      <UserWidget src="assets/images/profile/r.vogt.jpg" name="Chrisoph Bühler" username="christophbuehler" />
    </div>
  </div>
);

export const Widget = Template.bind({});
Widget.args = {
  src: 'assets/images/profile/r.vogt.jpg',
  name: 'Robert Vogt',
  username: 'robertvogt',
};

export const Row = TemplateRow.bind({});
