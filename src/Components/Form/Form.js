import React, { Component } from 'react';
import Noimage from '../../Noimage.jpg';
import axios from 'axios';

class Form extends Component {

    constructor(){
        super();

        this.state = {
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

    addImage = () => {
        const newImage = {
            url: this.state.image
        }
        axios.post('/api/products', newImage).then(res => {
            this.setState({
                image: res.data
            })
        })
    }

    addName = () => {
        const {image, name, price} = this.state;
        axios.post('/api/products', {image, name, price}).then(res => 
            this.setState({
                products: res.data,
                image: '',
                name: '',
                price: ''
            })
        )
    }

    addPrice = () => {
        const newPrice = {
            url: this.state.price
        }
        axios.post('/api/products', newPrice).then(res => {
            this.setState({
                price: res.data
            })
        })
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
                    <button>Add To Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;