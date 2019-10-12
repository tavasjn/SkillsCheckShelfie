import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {

    constructor() {
        super()

        this.state = {

            products: [],

            image: '',
            name: '',
            price: 0,
            edit: false,
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        axios.get('/api/products/').then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    handleInput = (val) => {
        this.setState({
            image: val,
            name: val,
            price: val
        })
    }


    updateProduct = (data) => {
        this.setState({
            products: data,
        })
    }

    deleteProduct = (id) => {
        // console.log(id)
        axios.delete(`/api/products/${id}`).then(res => {
            this.setState({
                products: res.data
            })
        })
    }



    render() {
        let { products, image, name, price } = this.state;
        // console.log(this.state.products)
        return (
            <div>
                {products.map((products, index) => (
                    <Product products={products} index={index}
                        deleteProduct={this.deleteProduct}/>
                ))}
            </div>
        )
    }
}

export default Dashboard;