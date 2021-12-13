import React from "react";
import Carousel from "./Carousel/Carousel";
import Header from "./Header/Header";
import Product from "./Product/Product";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Product />
    </>
  );
}
