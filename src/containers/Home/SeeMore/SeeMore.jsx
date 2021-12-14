import React from "react";
import BtnSeeMore from "../../../components/Buttons/BtnSeeMore/BtnSeeMore";

export default function SeeMore() {
  return (
    <div className="seeMore">
      <div className="seeMore__Container">
        <div className="seeMore__bg">
          <img
            className="video-object-05 d-lg-block"
            src={
              require("../../../assets/images/Home/video-object-05.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-07 d-lg-block"
            src={
              require("../../../assets/images/Home/video-object-07.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-06 d-lg-block"
            src={
              require("../../../assets/images/Home/video-object-06.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-09 "
            src={
              require("../../../assets/images/Home/video-object-09.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-08 "
            src={
              require("../../../assets/images/Home/video-object-08.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-02 "
            src={
              require("../../../assets/images/Home/video-object-02.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-04 "
            src={
              require("../../../assets/images/Home/video-object-04.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-03 "
            src={
              require("../../../assets/images/Home/video-object-03.png").default
            }
            alt="loading image"
          />
          <img
            className="video-object-01 "
            src={
              require("../../../assets/images/Home/video-object-01.png").default
            }
            alt="loading image"
          />
        </div>
        <div className="seeMore__text">
          <h2 className="text-uppercase">what happened</h2>
          <p className="mt-5">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
          <div class="mx-auto mt-5" style={{ width: "fit-content" }}>
            <BtnSeeMore />
          </div>
        </div>
        <div className="seeMore__img">
          <img
            src={require("../../../assets/images/Home/video.png").default}
            alt="loading image"
          />
        </div>
      </div>
    </div>
  );
}
