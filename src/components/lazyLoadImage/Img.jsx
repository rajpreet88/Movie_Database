import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const Img = (props) => {
  //{src, className}
  return (
    <LazyLoadImage
      className={props.className || ""}
      alt=""
      effect="blur"
      src={props.src}
    />
  );
};

export default Img;
