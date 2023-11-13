import React, { useMemo, useRef, useState } from "react";

import image2 from "./../../../assets/image/2.jpg";
import image3 from "./../../../assets/image/3.jpg";
import image4 from "./../../../assets/image/4.jpg";
import image5 from "./../../../assets/image/5.jpg";
import image6 from "./../../../assets/image/6.jpg";
import image7 from "./../../../assets/image/7.jpg";

export function LayoutImageCatalog({ imageIndex }) {
  // Image Index
  const images = useMemo(
    () => [image2, image3, image4, image5, image6, image7],
    []
  );
  const randomIndex =
    imageIndex !== undefined
      ? imageIndex
      : Math.floor(Math.random() * images.length);
  const validIndex = randomIndex >= 0 && randomIndex < images.length;

  // Love Click
  const [isClicked, setIsClicked] = useState(false);
  const clickLove = () => {
    setIsClicked(!isClicked);
  };

  // Fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);
  const enterFullscreen = () => {
    setIsFullscreen(true);
  };
  const leaveFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className={`catalog-box ${isFullscreen ? "fullscreen" : ""}`}>
      <div className="fullscreen-image">
        {validIndex ? (
          <img
            src={images[randomIndex]}
            loading="lazy"
            className="box-image"
            alt={`Image-${randomIndex}`}
          />
        ) : (
          ""
        )}
        <div className="box-icon">
          <span
            className={`material-symbols-outlined love ${
              isClicked ? "clicked" : ""
            }`}
            onClick={clickLove}
          >
            favorite
          </span>
          <span
            className="material-symbols-outlined info"
            onClick={enterFullscreen}
          >
            info
          </span>
          <span
            className="material-symbols-outlined back"
            onClick={leaveFullscreen}
          >
            keyboard_backspace
          </span>
        </div>
      </div>
      <div className="box-desc">
        <div className="title">Lorem, ipsum.</div>
        <div className="date">Lorem ipsum dolor sit.</div>
        <div className="note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia ipsam non, consequuntur quae, autem totam mollitia dolorum voluptas dolor obcaecati, illo ipsum in sapiente quia quidem? Quibusdam, dignissimos saepe delectus explicabo quod aliquam in ex laborum nisi similique, temporibus ipsum ea eaque assumenda eum distinctio dolorem natus porro error sapiente suscipit ab autem maiores doloribus! Sunt dolores minus natus tenetur optio doloribus quaerat voluptate animi magnam illum ducimus tempore, laborum reiciendis recusandae, maiores ipsam assumenda, cupiditate molestiae quas minima quidem. Eaque, quae quidem quo similique dicta atque alias blanditiis iusto beatae hic reiciendis. Voluptas nobis iure provident nulla numquam magnam culpa qui tempora, esse recusandae neque sunt ut maxime repudiandae rem similique necessitatibus fuga! Natus dolore modi quod. Repellat, officia placeat. Illum voluptatum temporibus repudiandae consectetur expedita molestias a explicabo? Quibusdam officia officiis sunt incidunt veniam fugiat sapiente quidem, doloremque soluta et blanditiis dignissimos recusandae quae, minus aliquam ad!</div>
      </div>
    </div>
  );
}
