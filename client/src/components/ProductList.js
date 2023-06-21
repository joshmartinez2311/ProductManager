import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:5000/api/product")
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>All Products</h1>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    product.map((product, index) => {
                        return (
                        <tr key={product._id}>
                            <td>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <button className="btn btn-danger">delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;