import React, { useState } from 'react';

const AddProduct = props => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [currentId, setCurrentId] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();

        props.handleSubmit({name, price, description, id: currentId});
        setCurrentId(currentId + 1);
        props.history.push('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add product</h1>
            <div>
                <label>Name:</label>
                <input type="text" onChange={event => setName(event.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" onChange={event => setPrice(event.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea onChange={event => setDescription(event.target.value)} required />
            </div>
            <input className="button" type="submit" value="Add" />
        </form>
    );
}

export default AddProduct;