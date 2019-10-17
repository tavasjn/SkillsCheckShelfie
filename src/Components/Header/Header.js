import React, {Component} from 'react';
import Logo from '../../shelfie_icon.png'
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header>
                <div className='title'><img src={Logo}/></div>
                <div className='title'>SHELFIE</div>
                <Link to='/'><button>Products</button></Link>
                <Link to='/add'><button>Add Item</button></Link>
            </header>
        )
    }
}

export default Header;