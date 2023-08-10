import React from "react";

export const ProductList = (props) => {
  console.log(props.item);
  let { title, price, description, image, rating, category } = props.item;
  return (
    <>
      <div class="card mx-3" style={{ width: "250px", height: "400px" }}>
        <img
          src={image}
          class="card-img-top"
          alt="..."
          style={{ width: "200px", height: "200px" }}
        />
        <div class="card-body">
          <p class="card-text">{category}</p>
          <p>{title}</p>
          <p>${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductList;
