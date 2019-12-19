import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

import './App.css';

function App() {
	return (
		<Router>
            <div>
                <aside>
                    <Link to={'/'}>Products</Link>
                    <Link to={'/add-product'}>Add product</Link>
                </aside>
            </div>

            <main>
                <Route exact path="/" component={ProductList} />
                <Route path="/add-product" component={AddProduct} />
                <Route path="/product/:id" component={ProductDetail} />
            </main>
        </Router>
	);
}

export default App;
