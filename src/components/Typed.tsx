import React, { FC, useEffect, useRef } from "react";
import TypedJS, { TypedOptions } from "typed.js";

interface Typed {
  options: TypedOptions;
}

export const Typed: FC<Typed> = (props) => {
  const { options } = props;

  // Create reference to store the DOM element containing the animation
  const spanTypedElement = useRef<HTMLSpanElement>({} as HTMLSpanElement);

  useEffect(() => {
    // elRef refers to the <span> rendered below
    const typed = new TypedJS(spanTypedElement.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return <span ref={spanTypedElement}></span>;
};
