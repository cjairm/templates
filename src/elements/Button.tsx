import React, { FC } from "react";

import { BulmaWrapper } from "../layouts/BulmaWrapper";
import { ALIGNMENT, COLOR, SIZE } from "../constants";

interface Button {
  color?: COLOR | string;
  textColor?: COLOR | string;
  isColorLight?: boolean;
  isDisabled?: boolean;
  isFullwidth?: boolean;
  isOutlined?: boolean;
  isLoading?: boolean;
  isResponsive?: boolean;
  isRounded?: boolean;
  size?: SIZE;
  [attributeName: string]: any;
}

export const Button: FC<Button> = (props) => {
  const {
    color,
    textColor,
    isColorLight,
    isDisabled,
    isFullwidth,
    isOutlined,
    isLoading,
    isResponsive,
    isRounded,
    size,
    ...rest
  } = props;
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
  const colorLightClass = isColorLight ? ` ${COLOR.IS_LIGHT}` : "";
  const sizeClass = size ? ` ${size}` : " is-normal";
  const isResponsiveClass = isResponsive ? " is-responsive" : "";
  const isFullwidthClass = isFullwidth ? " is-fullwidth" : "";
  const isOutlinedClass = isOutlined ? " is-outlined" : "";
  const isRoundedClass = isRounded ? " is-rounded" : "";
  const isLoadingClass = isLoading ? " is-loading" : "";

  return (
    <BulmaWrapper>
      <button
        className={`button${colorClass}${colorLightClass}${sizeClass}${isResponsiveClass}${isFullwidthClass}${isOutlinedClass}${isRoundedClass}${isLoadingClass}`}
        disabled={isDisabled}
        style={mainStyles}
        {...rest}
      >
        {props.children}
      </button>
    </BulmaWrapper>
  );
};

export const ButtonsAreMedium: FC<{ children: any }> = ({ children }) => (
  <BulmaWrapper>
    <div className="buttons are-medium">{children}</div>
  </BulmaWrapper>
);

export const ButtonsAreSmall: FC<{ children: any }> = ({ children }) => (
  <BulmaWrapper>
    <div className="buttons are-small">{children}</div>
  </BulmaWrapper>
);

export const StaticButton: FC<{ children: any }> = ({ children }) => (
  <BulmaWrapper>
    <span className="button is-static">{children}</span>
  </BulmaWrapper>
);

export const AttachedButtons: FC<{ children: any; position?: ALIGNMENT }> = ({
  children,
  position,
}) => {
  const positionClass = position ? ` ${position}` : "";
  return (
    <BulmaWrapper>
      <span className={`buttons has-addons ${positionClass}`}>{children}</span>
    </BulmaWrapper>
  );
};
