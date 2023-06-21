import React, { useState } from "react";
import axios from "axios";
import ProductsForm from "../components/ProductsForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [ product, setProduct] = useState([]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        <div className="container">
            <div className="row">   
                <div className="col">
                    <ProductsForm product = {product} setProduct = {setProduct} />
                </div>
            </div>    
            <div className="row"> 
                <div className="col">
                    <ProductList product = {product} setProduct = {setProduct} removeFromDom={removeFromDom} />
                </div>
            </div> 
        </div>
    )
}
export default Main;