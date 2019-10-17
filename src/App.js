import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import routes from './routes';



class App extends React.Component {
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

  handleInput = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      [name]: value,
      [name]: value,
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

  toggleEdit = () => {
    this.setState({ edit: !this.state.editing });
  };


  updateProduct = (id) => {
    let { image, name, price } = this.state;
    axios.put(`/api/products/${id}`, { image, name, price }).then(res => {
      this.setState({
        products: res.data
      });
      this.toggleEdit();
    });
  };


  addProduct = (image, name, price) => {
    console.log(image, name, price)
    axios.post('/api/products', { image, name, price }).then(res => this.setState({
      products: res.data,
      image: '',
      name: '',
      price: ''
    }))
  }




  render() {
    return (
      <HashRouter >
        <div className="App" >
          <Header />
          {/* <div className='body-boxes'>
            <Dashboard products={this.state.products}
              deleteProduct={this.deleteProduct}
              updateProduct={this.updateProduct} />
            <Form addProduct={this.addProduct}
              handleInput={this.handleInput}
              image={this.state.image}
              name={this.state.name}
              price={this.state.price} />
          </div> */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
