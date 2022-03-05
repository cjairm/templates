import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Navbar,
  NavbarBrand,
  NavbarBurgerButton,
  NavbarItem,
  NavbarMenu,
} from "../components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
  const { menuPosition, textColor, ...rest } = args;
  return (
    <Navbar {...rest}>
      <NavbarBrand>
        <NavbarItem href="/#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </NavbarItem>
        <NavbarBurgerButton
          color={textColor}
          ariaLabel="menu"
          ariaExpanded="false"
          dataTarget="example-id"
        />
      </NavbarBrand>
      <NavbarMenu key="example-id" menuPosition={menuPosition}>
        <NavbarItem href="/#" textColor={textColor} color={rest.color}>
          Link 1
        </NavbarItem>
        <NavbarItem href="/#" textColor={textColor} color={rest.color}>
          Link 2
        </NavbarItem>
        <NavbarItem href="/#" textColor={textColor} color={rest.color}>
          Link 3
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  role: "navigation",
  ariaLabel: "main navigation",
  menuPosition: "right",
  color: "#aa00aa",
  textColor: "white",
};
