import React, { FC } from "react";

import { BulmaWrapper } from "../layouts/BulmaWrapper";
import { COLOR, FLEX_POSITION, SIZE, TEXT_ALIGNMENT } from "../constants";

export enum OVERLAY_COLOR {
  WHITE = "white",
  BLACK = "black",
  NONE = "none",
}

enum SCREEN_HEIGHT {
  HALF_HEIGHT = "is-halfheight",
  FULL_HEIGHT = "is-fullheight",
}

export const HERO_HEIGHT = { ...SIZE, ...SCREEN_HEIGHT } as const;

interface Hero {
  backgroundColor?: COLOR | string;
  children?: any;
  urlImage?: string;
  position?: FLEX_POSITION;
  overlayColor?: OVERLAY_COLOR;
  height?: typeof HERO_HEIGHT;
}

export const Hero: FC<Hero> = (props) => {
  const {
    backgroundColor,
    children,
    urlImage,
    position,
    overlayColor,
    height,
  } = props;
  const sectionStyles: { [style: string]: string } = {};
  const heroBodyStyles: { [style: string]: string } = {};
  const overlayColorName =
    overlayColor === OVERLAY_COLOR.BLACK
      ? "black"
      : overlayColor === OVERLAY_COLOR.WHITE
      ? "white"
      : overlayColor === OVERLAY_COLOR.NONE
      ? ""
      : "";

  if (overlayColorName) {
    sectionStyles.position = "relative";

    heroBodyStyles.position = "absolute";
    heroBodyStyles.height = "100%";
    heroBodyStyles.width = "100%";
  }

  if (urlImage) {
    sectionStyles.backgroundImage = `url('${urlImage}')`;
  }

  let backgroundColorClass = "";
  if (Object.values(COLOR)?.includes(backgroundColor as any)) {
    backgroundColorClass = ` ${backgroundColor}`;
  } else if (backgroundColor) {
    sectionStyles.backgroundColor = backgroundColor;
  }

  const positionClass = position ? " " + position : "";
  const heightClass = height ? " " + height : "";

  return (
    <BulmaWrapper>
      <section
        className={`hero${heightClass}${backgroundColorClass}`}
        style={sectionStyles}
      >
        {overlayColorName && (
          <Overlay backgroundColor={overlayColorName as OVERLAY_COLOR} />
        )}
        <div className={`hero-body${positionClass}`} style={heroBodyStyles}>
          {children}
        </div>
      </section>
    </BulmaWrapper>
  );
};

const Overlay: FC<{ backgroundColor: OVERLAY_COLOR }> = ({
  backgroundColor,
}) => {
  return (
    <div
      style={{
        backgroundColor:
          backgroundColor === "black"
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(255, 255, 255, 0.6)",
        position: "absolute",
        top: "0",
        left: "0",
        padding: "0",
        height: "100%",
        width: "100%",
        opacity: "0.9",
      }}
    />
  );
};

export const Content: FC<{
  textAlignment?: TEXT_ALIGNMENT;
  textSize?: SIZE;
  children?: any;
}> = ({ textAlignment, textSize, children }) => {
  const textPositionClass = textAlignment ? " " + textAlignment : "";
  const textSizeClass = textSize ? " " + textSize : "";
  return (
    <div className={`content${textPositionClass}${textSizeClass}`}>
      {children}
    </div>
  );
};
