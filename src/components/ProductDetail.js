import React from 'react';

const ProductDetail = props => {
    return (
        <div className="single-product">
            <img src={props.product.image} alt="Product" />
            <h2>{props.product.name}</h2>
            <p className="description">{props.product.description}</p>
            <p className="price">{props.product.price}€</p>
            <button onClick={() => props.handleClick({product: props.product, quantity: 1})}>Add to cart</button>
        </div>
    );
}

export default ProductDetail;