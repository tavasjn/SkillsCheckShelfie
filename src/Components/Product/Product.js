import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            updateInput: '',
            edit: false,
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleInput = (val) => {
        this.setState({
            updateInput: val
        })
    }

    handleSubmit = () => {
        const updatedProduct = {
            product: this.state.updateInput
        }

        axios.put(`/api/products/${this.props.products}`, updatedProduct)
            .then(res => {
                this.props.updateProduct(res.data)
            })
        this.toggleEdit()
    }

    handleDelete = () => {
        axios.delete(`/api/products/${this.props.products}`)
            .then(res => {
                this.props.getProducts()
            })
    }


    render() {
        // console.log(this.props.products[1])
        return (
            <div className='item-box'>
                <div className='product-image'><img src={this.props.products.image} /></div>
                <div className='item-desc'>
                    <div>{this.props.products.name}</div>
                    <div>${this.props.products.price}</div>
                    <div>
                        {!this.state.edit
                            ? (<>
                                <button onClick={this.toggleEdit}>Edit</button>
                                <button onClick={this.handleDelete}>Delete</button>
                            </>)
                            : (
                                <>
                                    <input
                                        value={this.state.updateInput}
                                        onChange={(e) => this.handleInput(e.target.value)} />
                                    <button onClick={this.handleSubmit}>Submit</button>
                                </>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
        
export default Product;