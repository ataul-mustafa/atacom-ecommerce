import { Fragment } from 'react';
import Header from '../layout/Header/Header';
import './Cart.css'
import CartItemCard from './CartItemCart.js'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart, removeItemsFromCart } from '../../actions/cartAction';
import EmptyCart from './EmptyCart.js'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);


    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemToCart(id, newQty,))
    }
    const deletCartItems = (id) => {
        dispatch(removeItemsFromCart(id))
    }

    const checkOutHandler = () =>{
        navigate('/login?redirect=shipping');
    }


    return (
        <div>
            <Header />
            <Fragment>
                {cartItems.length === 0 ? <EmptyCart /> : <Fragment>
                    <div className='cartPage' >
                        <div className='CartHeader'>
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>SubTotal</p>
                        </div>

                        {cartItems && cartItems.map((item) => (
                            <div className='cartContainer' key={item.product} >
                                <CartItemCard item={item} deletCartItems={deletCartItems} />
                        
                                <div className='cardInput'>
                                    <input type="number" value={item.quantity} readOnly />
                                    <div className='upDownArrows'>
                                        <div className='increaseArrow'><ArrowDropUpIcon onClick={() => increaseQuantity(item.duration, item.product, item.quantity, item.stock)} /></div>
                                        <div className='decreaseArrow'><ArrowDropDownIcon onClick={() => decreaseQuantity(item.duration, item.product, item.quantity)} /></div>
                                    </div>
                                </div>
                                <p className='cartSubTotal'>{`${(item.price * item.quantity)}`}</p>
                            </div>
                        ))}

                        <div className='cartGrossProfit'>
                            <div></div>
                            <div className='cartGrossProfitBox'>
                                <p>Gross Total</p>
                                <p>{`${cartItems.reduce((acc, item) =>
                                    acc +  (item.quantity * item.price), 0
                                )}`}</p>
                            </div>
                            <div></div>
                            <div className='checkOutBtn'>
                                <button onClick={checkOutHandler}>Check Out</button>
                            </div>
                        </div>
                    </div>
                </Fragment>}
            </Fragment>
        </div>
    )
}

export default Cart;