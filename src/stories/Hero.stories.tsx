import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hero, Content, OVERLAY_COLOR, HERO_HEIGHT } from "../layouts/Hero";
import { TEXT_ALIGNMENT, COLOR } from "../constants";

export default {
  title: "Layouts/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const FullHeight = Template.bind({});
FullHeight.args = {
  urlImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feskipaper.com%2Fimages%2Fimages-2.jpg&f=1&nofb=1",
  overlayColor: OVERLAY_COLOR.WHITE,
  height: HERO_HEIGHT.FULL_HEIGHT as any,
  children: (
    <Content>
      <h1>Title</h1>
      <p>subtitle</p>
    </Content>
  ),
};

export const HalfHeight = Template.bind({});
HalfHeight.args = {
  urlImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhddesktopwallpapers.in%2Fwp-content%2Fuploads%2F2015%2F08%2Fmaldives-resort-images-851x315.jpg&f=1&nofb=1",
  overlayColor: OVERLAY_COLOR.BLACK,
  height: HERO_HEIGHT.HALF_HEIGHT as any,
  children: (
    <>
      <div className="columns is-flex-grow-1">
        <div className="column is-half">
          <Content textAlignment={TEXT_ALIGNMENT.CENTERED}>
            <h1 className="has-text-white">Title</h1>
            <p className="has-text-white">subtitle</p>
          </Content>
        </div>
        <div className="column is-half">
          <Content textAlignment={TEXT_ALIGNMENT.CENTERED}>
            <h1 className="has-text-white">Title</h1>
            <p className="has-text-white">subtitle</p>
          </Content>
        </div>
      </div>
    </>
  ),
};

export const MediumHeight = Template.bind({});
MediumHeight.args = {
  backgroundColor: COLOR.IS_PRIMARY,
  height: HERO_HEIGHT.MEDIUM as any,
  children: (
    <>
      <div className="columns is-flex-grow-1">
        <div className="column is-half">
          <Content textAlignment={TEXT_ALIGNMENT.CENTERED}>
            <h1 className="has-text-black">Title</h1>
            <p className="has-text-black">subtitle</p>
          </Content>
        </div>
        <div className="column is-half">
          <Content textAlignment={TEXT_ALIGNMENT.CENTERED}>
            <h1 className="has-text-black">Title</h1>
            <p className="has-text-black">subtitle</p>
          </Content>
        </div>
      </div>
    </>
  ),
};

export const CustomizedColorHeight = Template.bind({});
CustomizedColorHeight.args = {
  backgroundColor: "#821916",
  height: HERO_HEIGHT.SMALL as any,
  children: (
    <>
      <div className="columns is-flex-grow-1">
        <div className="column is-half">
          <Content textAlignment={TEXT_ALIGNMENT.CENTERED}>
            <h1 className="has-text-white">Odio</h1>
            <p className="has-text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Content>
        </div>
        <div className="column is-half">
          <Content textAlignment={TEXT_ALIGNMENT.CENTERED}>
            <h1 className="has-text-white">Vitae</h1>
            <p className="has-text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
              Enim ut tellus elementum sagittis vitae et leo duis. In metus
              vulputate eu scelerisque felis. Curabitur gravida arcu ac tortor
              dignissim convallis. Scelerisque fermentum dui faucibus in ornare
              quam. Duis convallis convallis tellus id interdum velit. Maecenas
              volutpat blandit aliquam etiam erat velit. Scelerisque felis
              imperdiet proin fermentum leo vel orci. Malesuada pellentesque
              elit eget gravida. At quis risus sed vulputate odio. Volutpat
              consequat mauris nunc congue nisi. Non sodales neque sodales ut
              etiam sit amet. Donec pretium vulputate sapien nec sagittis
              aliquam. Vestibulum sed arcu non odio. Ornare arcu odio ut sem
              nulla pharetra diam sit. Vel elit scelerisque mauris pellentesque
              pulvinar. Sem nulla pharetra diam sit amet nisl suscipit
              adipiscing. Odio tempor orci dapibus ultrices in iaculis nunc sed
              augue.
            </p>
          </Content>
        </div>
      </div>
    </>
  ),
};
