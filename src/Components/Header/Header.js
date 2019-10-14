import React, {Component} from 'react';
import Logo from '../../shelfie_icon.png'

class Header extends Component {
    render(){
        return(
            <header>
                <div className='title'><img src={Logo}/></div>
                <div className='title'>SHELFIE</div>
            </header>
        )
    }
}

export default Header;