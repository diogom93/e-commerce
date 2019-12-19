import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentId, setCurrentId] = useState(0);

    const addProduct = product => {
        const productsAux = [...products, {...product, id: currentId.toString()}];
        setCurrentId(currentId + 1);
        setProducts(productsAux);
        localStorage.setItem('products', JSON.stringify(productsAux));
    }

    const removeProduct = productIndex => {
        const productsAux = [...products];
        productsAux.splice(productIndex, 1);
        setProducts(productsAux);
        localStorage.setItem('products', JSON.stringify(productsAux));
    }

    const addToCart = ({product, quantity}) => {
        const index = cart.findIndex(cartItem => cartItem.product.id === product.id);

        let cartAux = [];
        if (index === -1) {
            cartAux = [...cart, {product, quantity}];
        } else {
            quantity += cart[index].quantity;
            cartAux = cart.filter(cartItem => cartItem.product.id !== product.id).concat({product, quantity});
        }

        setCart(cartAux);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem('products')) || []);
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

	return (
		<Router>
            <div>
                <aside>
                    <Link to={'/'}>Products</Link>
                    <Link to={'/add-product'}>Add product</Link>
                </aside>
            </div>

            <main>
                <Cart cart={cart} />
                <Route exact path="/" render={({history}) => <ProductList products={products} handleButtonClick={removeProduct} history={history} />} />
                <Route path="/add-product" render={({history}) => <AddProduct handleSubmit={addProduct} history={history} />} />
                <Route path="/product/:id" render={({match}) => <ProductDetail handleClick={addToCart}
                    product={products.find(product => product.id === match.params.id)} />} />
            </main>
        </Router>
	);
}

export default App;
