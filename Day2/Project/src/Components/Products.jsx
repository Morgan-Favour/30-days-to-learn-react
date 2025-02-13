import React from "react";

function Products(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="card-info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Products;
