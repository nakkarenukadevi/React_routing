import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

export const About = () => {
  let [product, setproduct] = useState([]);

  useEffect(() => {
    handelData();
  }, []);
  const handelData = async () => {
    let data = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    let json = await data.json();
    console.log(json);
    setproduct(json);
  };

  return (
    <div className=" container d-flex ">
      <>
        {product.map((item) => {
          return <ProductList key={item.id} item={item} />;
        })}
      </>
    </div>
  );
};
export default About;
