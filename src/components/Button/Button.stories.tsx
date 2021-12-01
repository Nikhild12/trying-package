import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import  Button,{ ButtonProps } from "./Button";
import { Story } from "@storybook/store";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };