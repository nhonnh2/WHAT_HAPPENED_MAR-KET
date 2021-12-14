import React from "react";
import Carousel from "./Carousel/Carousel";
import Header from "./Header/Header";
import Product from "./Product/Product";
import Question from "./Introduction/Introduction";
import BrandStory from "./BrandStory/BrandStory";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Question />
      <Product />
      <BrandStory />
    </>
  );
}
