import React from 'react';
import '../App.css';

const ProductDetails = (product) => {
    return (
        <>
            <p key={product.data.id} className="textalign"><br/>
            <h3>Product Details Information</h3>
            <b>Category:</b> {product.data.category}<br/>
            <b>Name:</b> {product.data.name}<br/>
            <b>Price:</b> BDT {product.data.price}<br/>
            <b>Description:</b> {product.data.description}</p>
        </>
    )
}

export default ProductDetails