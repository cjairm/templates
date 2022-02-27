import React, { FC } from "react";

import "bulma/css/bulma.min.css";

interface Button {
  color?: string;
}

export const Button: FC<Button> = () => (
  <button className="button">Button</button>
);
