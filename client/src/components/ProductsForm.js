import React, { useState } from 'react'
import axios from 'axios'

const ProductsForm = (props) => {
    const {product, setProduct} = props;
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
            setProduct([...product, res.data]);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='form-group row'>
                <label htmlFor="title" className='col-sm-2 col-form-label'>Title</label>
                <div className='col-sm-10'>
                    <input type="text" name="title" onChange = {(e) => setTitle(e.target.value)} className='form-control'/>
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor="price" className='col-sm-2 col-form-labe'>Price</label>
                <div className='col-sm-10'>
                    <input type="number" name="price" onChange = {(e) => setPrice(e.target.value)}className='form-control' />
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor="description" className='col-sm-2 col-form-label'>Description</label>
                <div className='col-sm-10'>
                    <input type="text" name="description" onChange = {(e) => setDescription(e.target.value)} className='form-control'/>
                </div>
            </div>
            <input type="submit" className='btn btn-success'/>
        </form>
    </>
    )
}
export default ProductsForm;