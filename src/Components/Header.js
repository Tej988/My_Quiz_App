import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="title" >  <span className="heading_title">Oyester</span> Quiz Hub</Link>
      
        </div>
    )
}

export default Header
