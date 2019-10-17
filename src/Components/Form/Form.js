import React, { Component } from 'react';
import Noimage from '../../Noimage.jpg';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Form extends Component {

    constructor() {
        super();

        this.state = {


            id: 0,
            image: '',
            name: '',
            price: 0,
            index: 0,
            editing: false,

        }
    }

    cancel = () => {
        this.setState({
            image: '',
            name: '',
            price: 0
        })
    }

    componentDidMount(){
        axios.get(`/api/products/${id}`).then(res => this.setState({
            id: res.data.id,
            image: res.data.image,
            name: res.data.name,
            price: res.data.price
        }))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className='add-product'>
                <div className='image-box'>
                    <img alt='' src={Noimage} />
                </div>
                <div className='input-box'>
                    Image URL:
                    <br />
                    <input
                        name='image'
                        value={this.props.image}
                        onChange={e => this.props.handleInput(e)}
                    ></input>
                </div>
                <div className='input-box'>
                    Product Name:
                    <br />
                    <input
                        name='name'
                        value={this.props.name}
                        onChange={e => this.props.handleInput(e)}></input>
                </div>
                <div className='input-box'>
                    Price:
                    <br />
                    <input
                        name='price'
                        value={this.props.price}
                        onChange={e => this.props.handleInput(e)}></input>
                </div>
                <div className='button-display'>
                    <button onClick={() => this.cancel()}>Cancel</button>
                    <button onClick={() => this.props.addProduct(this.props.image, this.props.name, this.props.price)}>Add To Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;