import React, { useMemo } from "react";
import { scaleOnEnter, scaleOnLeave } from "../../../component/Helper/CursorEffect";

import image2 from "./../../../assets/image/2.jpg";
import image3 from "./../../../assets/image/3.jpg";
import image4 from "./../../../assets/image/4.jpg";
import image5 from "./../../../assets/image/5.jpg";
import image6 from "./../../../assets/image/6.jpg";
import image7 from "./../../../assets/image/7.jpg";

export function ImageContainer({ className, animationRef }) {
  const images = useMemo(
    () => [image2, image3, image4, image5, image6, image7],
    []
  );

  return (
    <>
      <div className={className} ref={animationRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            loading="lazy"
            className="hero-animation-image"
          />
        ))}
      </div>
    </>
  );
}

export function HeroCursorTitle() {
  const onEnterTitle = () => {
    scaleOnEnter(3, 3);
  };
  const onLeaveTitle = () => {
    scaleOnLeave(0.2, 1);
  };

  return { onEnterTitle, onLeaveTitle };
}
