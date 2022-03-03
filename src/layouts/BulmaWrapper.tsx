import React, { FC } from "react";

import "bulma/css/bulma.min.css";

export const BulmaWrapper: FC<{ children: any }> = ({ children }) => (
  <>{children}</>
);
