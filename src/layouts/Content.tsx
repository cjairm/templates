import React, { FC } from "react";

import { BulmaWrapper } from "../layouts/BulmaWrapper";
import { SIZE, TEXT_ALIGNMENT } from "../constants";

interface Content {
  textAlignment?: TEXT_ALIGNMENT;
  textSize?: SIZE;
  children?: any;
}

export const Content: FC<Content> = ({ textAlignment, textSize, children }) => {
  const textPositionClass = textAlignment ? " " + textAlignment : "";
  const textSizeClass = textSize ? " " + textSize : "";
  return (
    <BulmaWrapper>
      <div className={`content${textPositionClass}${textSizeClass}`}>
        {children}
      </div>
    </BulmaWrapper>
  );
};
