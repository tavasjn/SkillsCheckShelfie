import React, { Component } from 'react';
import Noimage from '../../Noimage.jpg';
import axios from 'axios';

class Form extends Component {

    constructor(){
        super();

        this.state = {

            products: [],

            image: '',
            name: '',
            price: 0,
        }
    }

    cancel = () => {
        this.setState({
            image: '',
            name: '',
            price: 0
        })
    }

    handleInput = e => {
        let {image, name, price, value} = e.target;
        this.setState({
            [image]: value,
            [name]: value,
            [price]: value,
        })
    }


    addProduct = () => {
        let {image, name, price} = this.state;
        axios.post('/api/products', {image, name, price}).then(res => this.setState({
            products: res.data,
            image: '',
            name: '',
            price: ''
        }))
    }


    render() {
        return (
            <div className='add-product'>
                <div className='image-box'>
                    <img alt='' src={Noimage}/>
                </div>
                <div className='input-box'>
                    Image URL:
                    <br />
                    <input></input>
                </div>
                <div className='input-box'>
                    Product Name:
                    <br />
                    <input></input>
                </div>
                <div className='input-box'>
                    Price:
                    <br/>
                    <input></input>
                </div>
                <div className='button-display'>
                    <button onClick={this.cancel}>Cancel</button>
                    <button onClick={() => this.addProduct()}>Add To Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;