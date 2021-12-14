import React from "react";
import BtnSeeMore from "../../../components/Buttons/BtnSeeMore/BtnSeeMore";

export default function Issue() {
  return (
    <div className="issue">
      <div className="issue__bg">
        <img
          className="news_obj_02 d-md-block"
          src={
            require("../../../assets/images/Home/news-object-02.png").default
          }
          alt="loading image"
        />
        <img
          className="news_obj_03 d-md-block"
          src={
            require("../../../assets/images/Home/news-object-03.png").default
          }
          alt="loading image"
        />
      </div>
      <div className="issue__container">
        <div className="issue__seeMore">
          <h2 className="Text-Style-23 text-uppercase text-center">
            Happened’s issue
          </h2>
          <p className="Text-Style-9 mt-4">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <div class="mx-auto mt-5" style={{ width: "fit-content" }}>
            <BtnSeeMore />
          </div>
        </div>
        <div className="issue__list">
          <div className="issue__item issue__whpn">
            <h2 className="Text-Style-25 text-uppercase">whpn issue</h2>
            <img
              className="news_img_01  mt-5"
              src={
                require("../../../assets/images/Home/news-img-01.png").default
              }
              alt="loading image"
            />
          </div>
          <div className="issue__item issue__hot">
            <h3 className="Text-Style-24 text-uppercase text-center">
              b brand
            </h3>
            <div className="img__hot">
              <img
                className="news_object_04"
                src={
                  require("../../../assets/images/Home/news-object-04.png")
                    .default
                }
                alt="loading image"
              />
            </div>
          </div>
          <div className="issue__item ">
            <h3 className="Text-Style-24 text-uppercase text-center">
              b brand
            </h3>

            <img
              className="news_img_03 issue__itemImg"
              src={
                require("../../../assets/images/Home/news-img-03.png").default
              }
              alt="loading image"
            />
          </div>
          <div className="issue__item issue__ograngeHead">
            <h3 className="Text-Style-24 text-uppercase text-center">
              b brand
            </h3>

            <img
              className="news_img_04 issue__itemImg"
              src={
                require("../../../assets/images/Home/news-img-04.png").default
              }
              alt="loading image"
            />
          </div>
          <div className="issue__item ">
            <h3 className="Text-Style-24 text-uppercase text-center">
              b brand
            </h3>

            <img
              className="news_img_05 issue__itemImg"
              src={
                require("../../../assets/images/Home/news-img-05.png").default
              }
              alt="loading image"
            />
          </div>
          <div className="issue__icon">
            <img
              className="news_object_03x issue__itemImg"
              src={
                require("../../../assets/images/Home/news-object-03x.png")
                  .default
              }
              alt="loading image"
            />
          </div>
          <div className="issue__lol">
            <img
              className="news_object_05 issue__itemImg"
              src={
                require("../../../assets/images/Home/news-object-05.png")
                  .default
              }
              alt="loading image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
