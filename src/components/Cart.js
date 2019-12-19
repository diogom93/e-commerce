import React from 'react';

const Cart = props => {

    return (
        props.cart.length ?
            <table className="cart">
                <tbody>
                    <tr>
                        <td colSpan="3">
                            <h2>Cart</h2>
                        </td>
                    </tr>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    {props.cart.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.product.name}</td>
                                <td>{value.quantity}</td>
                                <td>{value.quantity * value.product.price}€</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : ''
    );
}

export default Cart;