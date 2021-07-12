import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.svg.png';
import { AiFillHome } from 'react-icons/ai';
import { ImCompass2 } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiCamera } from 'react-icons/fi';


const Navbar = () => {
    return (
        <>
        <div className="container-fluid sticky-top nav_bg">
            <div className="row myNavbar">
                <div className="col-8 mx-auto smallDeviceWidth">
                


        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink exact className="navbar-brand" to='/'><img src={logo} className='logo' alt="img"  /></NavLink>
          <div className='row'>
          
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to='/'><AiFillHome className='icon'/></NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to='/explore'><ImCompass2 className='icon'/></NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/like'><AiOutlineHeart className='icon'/></NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/upload'><FiCamera className='icon'/></NavLink>
              </li>
            </ul>
            </div>
          </div>
        
      </nav>
      </div>
      </div>
  </div>
        
        </>)
}
export default Navbar;
