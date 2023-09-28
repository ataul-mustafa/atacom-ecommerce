import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { addItemToCart } from "../../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const addToCartHandler = (id) =>{
        
    dispatch(addItemToCart(id, 1))
    alert.success("Item Added Succesfully");
  }

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating className="stars" {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <div className="priceCartIcon">
        <span>₹{product.price}</span>
        <AiOutlineShoppingCart onClick={()=>{addToCartHandler(product._id)}} className="cartIcon" />
      </div>
    </Link>
  );
};

export default ProductCard;