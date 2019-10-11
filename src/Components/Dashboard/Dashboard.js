import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {

    constructor() {
        super()

        this.state ={

            products: [],

            // image: '',
            // name:'',
            // price: 0,
            edit: false,
        }
    }

    componentDidMount(){
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



    render(){
        const mappedProducts = this.state.products.map((products, i) => {
            return(
                <Product 
                    key={i}
                    products={products}
                    />
            )
        })
        // console.log(this.state.products)
        return(
            <div className='product-box'>
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard;