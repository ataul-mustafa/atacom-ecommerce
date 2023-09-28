import './Header.css'
import React, { useState } from 'react';
// import  { GiHamburgerMenu}  from 'react-icons/gi'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx';
import ToggleButton from '@mui/material/ToggleButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';


const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const [showHem, setShowHem] = useState(false);


    return (
        
        <nav>
            <div className='hamBar'>
                <div className='hamBarLinks'>
                    <ul className={showHem ? "nav-bar" : "no-nav-bar"}>
                        <li onClick={() => setShowHem(!showHem)} className='cross'><RxCross2 /></li>
                        <li onClick={() => setShowHem(!showHem)}><Link to={"/"}>Home</Link></li>
                        <li onClick={() => setShowHem(!showHem)}><Link to={"/products"}>Products</Link></li>
                        <li onClick={() => setShowHem(!showHem)}><Link to={"/aboutUs"}>About Us</Link></li>
                        <li onClick={() => setShowHem(!showHem)}><Link to={"/contact"}>Contact Us</Link></li>
                        <li onClick={() => setShowHem(!showHem)}><Link to={"/Login"}>Account</Link></li>
                        <li onClick={() => setShowHem(!showHem)}><Link to={"/orders"}>My Orders</Link></li>
                    </ul>
                </div>
            </div>
            <div className='navBar'>
                <div className='section1'>
                    <div onClick={() => setShowHem(!showHem)} className='hambar'>
                        <ToggleButton size="small" >
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                    </div>
                    <div>
                        <Link to={"/"}><img className='logo' src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className='section2'>
                    <Link to={"/search"}>
                        <div className='searchBar'>
                            <AiOutlineSearch fontSize="large" />
                        </div>
                    </Link>
                    <div className='links'>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/products"}>Products</Link>
                        <Link className='lastChild' to={"/about"}>About Us</Link>
                    </div>
                </div>
                <div className='section3'>
                    <Link to={"/Login"}><AccountCircleIcon className="accountIcon" /></Link>
                    <div className='cartWithQuantity'>
                        <Link to={"/cart"}><AiOutlineShoppingCart className="cartIcon" /></Link>{cartItems.length > 0 && <p className='quantity'>{cartItems.length}</p>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;