import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = product => {
        setProducts([...products, product]);
    }

	return (
		<Router>
            <div>
                <aside>
                    <Link to={'/'}>Products</Link>
                    <Link to={'/add-product'}>Add product</Link>
                </aside>
            </div>

            <main>
                <Route exact path="/" render={() => <ProductList />} />
                <Route path="/add-product" render={({history}) => <AddProduct handleSubmit={addProduct} history={history} />} />
                <Route path="/product/:id">
                    <ProductDetail />
                </Route>
            </main>
        </Router>
	);
}

export default App;
