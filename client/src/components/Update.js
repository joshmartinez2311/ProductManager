import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/api/product/${id}`, {
            title: title,
            price: price,
            description: description
        })
        .then( res => {
            console.log(res);
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    return (
        <>
        <h1>Product update</h1>
        <form onSubmit={updateProduct}>
            <div className='form-group row'>
                <label htmlFor="title" className='col-sm-2 col-form-label'>Title</label>
                <div className='col-sm-10'>
                    <input type="text" name="title"  value={title} onChange = {(e) => setTitle(e.target.value)} className='form-control'/>
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor="price" className='col-sm-2 col-form-label'>Price</label>
                <div className='col-sm-10'>
                    <input type="number" name="price" value={price} onChange = {(e) => setPrice(e.target.value)}className='form-control' />
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor="description" className='col-sm-2 col-form-label'>Description</label>
                <div className='col-sm-10'>
                    <input type="text" name="description" value={description} onChange = {(e) => setDescription(e.target.value)} className='form-control'/>
                </div>
            </div>
            <input type="submit" className='btn btn-success'/>
        </form>
    </>
    )
}
export default Update;