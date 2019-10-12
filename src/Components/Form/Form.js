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
        let {name, value} = e.target;
        this.setState({
            [name]: value,
            [name]: value,
            [name]: value,
        })
    }


    addProduct = () => {
        let {image, name, price} = this.state;
        console.log(image,name,price)
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
                    <input
                    name='image'
                    value={this.state.image}
                    onChange={e => this.handleInput(e)}
                    ></input>
                </div>
                <div className='input-box'>
                    Product Name:
                    <br />
                    <input
                     name='name'
                     value={this.state.name}
                     onChange={e => this.handleInput(e)}></input>
                </div>
                <div className='input-box'>
                    Price:
                    <br/>
                    <input
                     name='price'
                     value={this.state.price}
                     onChange={e => this.handleInput(e)}></input>
                </div>
                <div className='button-display'>
                    <button onClick={() => this.cancel()}>Cancel</button>
                    <button onClick={() => this.addProduct()}>Add To Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;