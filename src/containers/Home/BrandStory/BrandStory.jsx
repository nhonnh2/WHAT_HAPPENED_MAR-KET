import React from "react";
import BtnSeeMore from "../../../components/Buttons/BtnSeeMore/BtnSeeMore";

export default function BrandStory() {
  return (
    <div className="brandStory">
      <div className="brandStory__bg">
        <img
          className="obj_01 d-xl-block"
          src={require("../../../assets/images/Home/object-01.png").default}
          alt="loading image"
        />
        <img
          className="obj_02 d-xl-block"
          src={require("../../../assets/images/Home/object-02.png").default}
          alt="loading image"
        />
        <img
          className="obj_03 d-xl-block"
          src={require("../../../assets/images/Home/object-03.png").default}
          alt="loading image"
        />
        <img
          className="obj_04"
          src={require("../../../assets/images/Home/object-04.png").default}
          alt="loading image"
        />
        <img
          className="obj_05"
          src={require("../../../assets/images/Home/object-05.png").default}
          alt="loading image"
        />
        <img
          className="obj_06"
          src={require("../../../assets/images/Home/object-06.png").default}
          alt="loading image"
        />
        <img
          className="obj_07"
          src={require("../../../assets/images/Home/object-07.png").default}
          alt="loading image"
        />
      </div>
      <div className="brandStory__container">
        <div className="brandStory__text ">
          <h2 className="Text-Style-3 text-uppercase text-center">
            Brand Story
          </h2>
          <p className="Text-Style-10">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
        <div className="brandStory__content mt-5">
          <div className="brandStory__rectangle"></div>
          <div className="row mt-1">
            <div className="brandStory__right brandStory__item col-6">
              <img
                src={require("../../../assets/images/Home/img.png").default}
                alt="loading image"
              />
            </div>
            <div className="brandStory__left brandStory__item col-6">
              <h3 className="Text-Style-22 text-uppercase">
                What Happened’s Brand story
              </h3>
              <p className="Text-Style-8">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.{" "}
              </p>
              <div class="mx-l mt-5" style={{ width: "fit-content" }}>
                <BtnSeeMore />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
