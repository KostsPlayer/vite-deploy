import React from "react";
import Slider from "./HeroSlider";
import { ImageContainer, HeroCursorTitle } from "./HeroProperty";

export default function Hero() {
  const { heroAnimation0, heroAnimation1, heroAnimation2 } = Slider();
  const { onEnterTitle, onLeaveTitle } = HeroCursorTitle();

  return (
    <>
      <div className="hero">
        <div
          className="hero-title"
          onMouseEnter={onEnterTitle}
          onMouseLeave={onLeaveTitle}
        >
          <span className="hero-title-text">
            <span className="hero-title-text-0">Shopionz</span>
          </span>
          <span className="hero-title-text">
            <span className="hero-title-text-1">has you covered</span>
          </span>
        </div>
        <div className="hero-animation">
          <ImageContainer
            className="hero-animation-0"
            animationRef={heroAnimation0}
          />
          <ImageContainer
            className="hero-animation-1"
            animationRef={heroAnimation1}
          />
          <ImageContainer
            className="hero-animation-2"
            animationRef={heroAnimation2}
          />
        </div>
      </div>
    </>
  );
}
