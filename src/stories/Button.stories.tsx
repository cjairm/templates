import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../elements/Button";
import { COLOR } from "../constants";

export default {
  title: "Elements/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: COLOR.IS_PRIMARY,
};

export const Link = Template.bind({});
Link.args = {
  color: COLOR.IS_LINK,
};

export const Info = Template.bind({});
Info.args = {
  color: COLOR.IS_INFO,
};

export const Success = Template.bind({});
Success.args = {
  color: COLOR.IS_SUCCESS,
};

export const Warning = Template.bind({});
Warning.args = {
  color: COLOR.IS_WARNING,
};

export const Danger = Template.bind({});
Danger.args = {
  color: COLOR.IS_DANGER,
};

export const Customized = Template.bind({});
Customized.args = {
  color: "#8467ad",
  textColor: "white",
};
