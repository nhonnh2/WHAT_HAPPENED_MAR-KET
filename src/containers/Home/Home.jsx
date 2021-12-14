import React from "react";
import Carousel from "./Carousel/Carousel";
import Header from "./Header/Header";
import Product from "./Product/Product";
import Question from "./Introduction/Introduction";
import BrandStory from "./BrandStory/BrandStory";
import Issue from "./Issue/Issue";
import SeeMore from "./SeeMore/SeeMore";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Question />
      <Product />
      <BrandStory />
      <Issue />
      <SeeMore />
      <Footer />
    </>
  );
}
