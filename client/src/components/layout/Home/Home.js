// import { Fragment } from "react"
import "./Home.css"
import ProductCard from './ProductCard.js'
import MetaData from '../metaData'
import Loader from '../Loader.js'
// import Header from '../Header/Header'
// import HeroSlider from '../Hero-slider/Hero-slider'
// import Imagecarousel from '../PromotProduct/Imagecarousel'
// import Slider from '../Slider/Slider'


import { clearErrors, getProduct } from "../../../actions/productAction.js"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import Slider from './Slider/Slider.js';
import Features from './Features/Features'
import { CategoriesHome } from './categories/CategoriesHome'
import Footer from './footer/Footer'
import SmBanner from './smBanner/SmBanner'
import DiscBanner from "./DiscBanner/DiscBanner"
import NewsLetter from "./newsLetter/NewsLetter"

const Home = ({ user }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products)
    


    useEffect(() => {
        dispatch(getProduct("", 4, [0, 25000], "", 0));
        if(error){
            alert.show(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, alert]) 
 

    return (
        <div >
            
            {loading ? <Loader /> :
            <div className="wrapper">
            <MetaData title="ataCom" />
            
            <Slider />

            <SmBanner />

            <div className='features'>
                <Features />
            </div>

            <h2 className="homeHeading">Featured Products</h2> 
            <div className="container" id="container">
                {products && products.map(product => (
                    <ProductCard user={user} key={product._id} product={product} />
                ))}
            </div>

            <div className='categories'>
                <CategoriesHome user={user} />
            </div>  

            {/* <div>
                <Cate1Products />
            </div> */}

            <div className="discBanner">
                <DiscBanner />
            </div>

            <h2 className="homeHeading">New Arrivals</h2> 
            <div className="container" id="container">
                {products && products.map(product => (
                    <ProductCard user={user} key={product._id} product={product} />
                ))}
            </div>

            <div className="newsLetter">
                <NewsLetter />
            </div>

            <div className='footer' >
                <Footer />
            </div>
        </div>
            }
        </div>
    )
}

export default Home;