import React, { Component } from 'react';
import axios from 'axios';

export default function Product({ products, index, deleteProduct, updateProduct }) {
    // console.log(products) 
    return (
        <div className='product-box'>
            <products className='item-box'>
                <section className='product-image'>
                    <img src={products.image} />
                </section>
                <div className='item-desc'>
                    <div>{products.name}</div>
                    <div>${products.price}</div>
                    <div className='button-display'>
                        <button onClick={() => updateProduct(index.id)}>Edit</button>
                        <button onClick={() => deleteProduct(products.id)}>Delete</button>
                    </div>
                </div>

            </products>
        </div>
    )
}