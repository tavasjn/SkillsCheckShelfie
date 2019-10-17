import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {


    render() {
        let { products, image, name, price } = this.props;

        return (
            <div>
                {products.map((products, index) => (
                    <Product products={products} index={index}
                        deleteProduct={this.props.deleteProduct} 
                        updateProduct={this.props.updateProduct}/>
                ))}
                {Dashboard}
            </div>
        )
    }
}

export default Dashboard;