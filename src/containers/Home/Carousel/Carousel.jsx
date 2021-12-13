import React from "react";

export default function Carousel() {
  return (
    <div className="carousel">
      <a href="#">
        <img
          src={require("../../../assets/images/Home/main-banner.png").default}
          alt="loading image"
        />
      </a>
    </div>
  );
}
