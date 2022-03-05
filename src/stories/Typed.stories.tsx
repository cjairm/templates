import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typed } from "../components/Typed";
import { Hero, HERO_HEIGHT } from "../layouts/Hero";
import { Content } from "../layouts/Content";
import { SIZE, TEXT_ALIGNMENT } from "../constants";

export default {
  title: "Components/Typed",
  component: Typed,
} as ComponentMeta<typeof Typed>;

const Template: ComponentStory<typeof Typed> = (args) => (
  <Hero backgroundColor="#821916" height={HERO_HEIGHT.SMALL as any}>
    <Content textAlignment={TEXT_ALIGNMENT.CENTERED} textSize={SIZE.LARGE}>
      <p className="has-text-white has-text-weight-bold">
        <Typed {...args} />
      </p>
    </Content>
  </Hero>
);

export const Basic = Template.bind({});
Basic.args = {
  options: {
    strings: ["This is test", "We can see", "This change"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 15,
    backDelay: 1000,
  },
};
