import React from 'react';

const ProductList = props => {
    const handleButtonClick = (event, index) => {
        event.preventDefault();

        props.handleButtonClick(index);
    }

    return (
        <div className="products-list">
            {props.products.length ?
                props.products.map((value, index) => {
                    return (
                        <div key={index}>
                            <img src={value.image} alt="Product" />
                            <h2>{value.name}</h2>
                            <p className="description">{value.description}</p>
                            <p className="price">{value.price}€</p>
                            <button onClick={(event) => handleButtonClick(event, index)}><span role="img">&#9932;</span></button>
                        </div>
                    );
                }) : 'No products'
            }
        </div>
    );
}

export default ProductList;