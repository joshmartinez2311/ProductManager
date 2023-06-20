import React, { useState } from 'react'
import axios from 'axios'

const ProductsForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/product', {
            title: title,
            price: price,
            description: description
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange = {(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" onChange = {(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange = {(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductsForm;