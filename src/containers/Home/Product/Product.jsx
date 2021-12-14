import React from "react";
import { listProduct } from "../../../data/product";
export default function Product() {
  const renderListProduct = () => {
    return listProduct.map((product, idx) => (
      <div className="product__item" key={idx}>
        <img
          src={
            require(`../../../assets/images/Product/${product.imgProduct}`)
              .default
          }
          alt="loading image"
        />

        <p className="Text-Style-21">{product.title}</p>
        <div className="product__itemBottom">
          <p className="Text-Style=21">{product.won} won</p>
          <div className="product__like">
            <span>
              <i class="fa fa-heart"> </i> {product.like}
            </span>
          </div>
        </div>
      </div>
    ));
  };
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
      <div className="listProduct">
        <div className="container">{renderListProduct()}</div>
      </div>
    </div>
  );
}
