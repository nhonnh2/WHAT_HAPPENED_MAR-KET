import React from "react";

export default function Product() {
  return (
    <div className="product">
      <div className="bestProduct">
        <div className="bestProduct__content">
          <div className="container">
            <h2 className="Text-Style-5 text-uppercase">best product</h2>
            <p className="Text-Style-16 mt-4 bestProduct__p">
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
            </p>
            <div className="bestProduct__list mt-5">
              <div className="row">
                <div className="bestProduct__item col-md-4">
                  <img
                    className="img_product"
                    src={
                      require("../../../assets/images/Product/best-image-01.png")
                        .default
                    }
                    alt="loading image"
                  />
                  <div className="productIcon">
                    <img
                      src={
                        require("../../../assets/images/Product/producticon-bg.png")
                          .default
                      }
                      alt="loading image"
                    />
                    <p className="Text-Style-17">01</p>
                  </div>
                  <div className="goProduct">
                    <span className="Text-Style">
                      How to create <br /> mobile-optimized
                    </span>
                    <a className="Text-Style text-light" href="">
                      go
                    </a>
                  </div>
                </div>
                <div className="bestProduct__item col-md-4">
                  <img
                    className="img_product"
                    src={
                      require("../../../assets/images/Product/best-image-02.png")
                        .default
                    }
                    alt="loading image"
                  />
                  <div className="productIcon">
                    <img
                      src={
                        require("../../../assets/images/Product/producticon-bg.png")
                          .default
                      }
                      alt="loading image"
                    />
                    <p className="Text-Style-17">02</p>
                  </div>
                  <div className="goProduct">
                    <span className="Text-Style">
                      How to create <br /> mobile-optimized
                    </span>
                    <a className="Text-Style text-light" href="">
                      go
                    </a>
                  </div>
                </div>
                <div className="bestProduct__item col-md-4">
                  <img
                    className="img_product"
                    src={
                      require("../../../assets/images/Product/best-image-03.png")
                        .default
                    }
                    alt="loading image"
                  />
                  <div className="productIcon">
                    <img
                      src={
                        require("../../../assets/images/Product/producticon-bg.png")
                          .default
                      }
                      alt="loading image"
                    />
                    <p className="Text-Style-17">03</p>
                  </div>
                  <div className="goProduct">
                    <span className="Text-Style">
                      How to create <br /> mobile-optimized
                    </span>
                    <a className="Text-Style text-light" href="">
                      go
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
