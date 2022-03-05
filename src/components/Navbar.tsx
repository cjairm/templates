import React, { FC, ReactChild, ReactNode } from "react";

import { BulmaWrapper } from "../layouts/BulmaWrapper";
import { COLOR } from "../constants";

export enum IS_FIXED {
  TOP = "is-fixed-top",
  BOTTOM = "is-fixed-bottom",
}

interface Navbar {
  children: any;
  isFixed?: IS_FIXED;
  color?: COLOR | string;
  [attributeName: string]: any;
}

export const Navbar: FC<Navbar> = (props) => {
  const { children, isFixed, color } = props;

  const mainStyles: { [style: string]: string } = {};
  let colorClass = "";
  if (Object.values(COLOR)?.includes(color as COLOR)) {
    colorClass = ` ${color}`;
  } else if (color) {
    mainStyles.backgroundColor = color;
  }

  let isFixedClass = "";
  if (isFixed === IS_FIXED.BOTTOM) {
    isFixedClass = ` ${IS_FIXED.BOTTOM}`;
  } else if (isFixed === IS_FIXED.TOP) {
    isFixedClass = ` ${IS_FIXED.TOP}`;
  }
  return (
    <BulmaWrapper>
      <nav
        style={mainStyles}
        className={`navbar px-2${colorClass}${isFixedClass}`}
      >
        {children}
      </nav>
    </BulmaWrapper>
  );
};

export const NavbarBrand: FC = (props) => {
  return <div className="navbar-brand">{props.children}</div>;
};

export const NavbarItem: FC<{
  children: any;
  color?: string;
  textColor?: string;
  [attributeName: string]: any;
}> = (props) => {
  const { children, color, textColor, ...rest } = props;

  const mainStyles: { [style: string]: string } = {};
  let colorClass = "";
  if (Object.values(COLOR)?.includes(color as any)) {
    colorClass = ` ${color}`;
  } else if (color) {
    mainStyles.backgroundColor = color;
    if (textColor) {
      mainStyles.color = textColor;
    }
  }
  return (
    <a className={`navbar-item${colorClass}`} style={mainStyles} {...rest}>
      {children}
    </a>
  );
};

export const NavbarMenu: FC<{
  children: ReactChild | ReactNode;
  key?: string;
  menuPosition?: "left" | "right";
}> = (props) => {
  const { children, key, menuPosition } = props;

  let menuPositionClass = "navbar-start";
  if (menuPosition === "left") {
    menuPositionClass = "navbar-start";
  } else if (menuPosition === "right") {
    menuPositionClass = "navbar-end";
  }

  return (
    <div id={key} className="navbar-menu">
      <div className={menuPositionClass}>{children}</div>
    </div>
  );
};

export const NavbarBurgerButton: FC<{
  keyTarget?: string;
  color?: string;
  [attributeName: string]: any;
}> = (props) => {
  const { children, color, ...rest } = props;
  const mainStyles: { [style: string]: string } = {};
  if (color) {
    mainStyles.color = color;
  }
  return (
    <button className="navbar-burger" {...rest}>
      <span style={mainStyles} aria-hidden="true"></span>
      <span style={mainStyles} aria-hidden="true"></span>
      <span style={mainStyles} aria-hidden="true"></span>
    </button>
  );
};
