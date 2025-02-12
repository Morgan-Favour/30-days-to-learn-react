import React from "react";

function Products(props) {
    return(
        <div>
            <img src={props.img} alt={props.productName} />
        </div>
    )
}

export default Products;