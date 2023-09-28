import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
import { clearErrors, getAllBanners } from "../../../../actions/adBannerAction";
import Loader from "../../Loader";
import { CREATE_ADBANNER_RESET } from "../../../../constants/adBannerConstant";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'


import "./Slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Fragment } from "react";

export default function Slider() {

    const dispatch = useDispatch();
    const alert = useAlert()

    const { loading, count, success, banners, error } = useSelector((state) => state.adBanner)

    useEffect(()=>{
      
      dispatch(getAllBanners());
    },[dispatch])

   useEffect(()=>{
    if(error){
        dispatch(clearErrors())
        alert.error(error)
    }
    if(count > 10){
        alert.show("Cannot promot more than 10 prdcts at a time")
    }
    if(success){
      dispatch({type: CREATE_ADBANNER_RESET})
    }
 
   },[dispatch, error, count, alert, banners, success])

  return (
    <Fragment>
      {loading ? (<Loader />) : 
       <Fragment>
       <div className="mySwiper">
       <Swiper
         slidesPerView={'auto'}
         spaceBetween={10}
         loop={true}
         autoplay={{
             delay: 2000,
             pauseOnMouseEnter: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation, Autoplay]}
         className="mySwiper"
       >
            {banners && banners.map((item, index) => (

              <SwiperSlide key={index}>
                <Link to={`/product/${item.productId}`}>
                  <img src={item.image.url} alt="slide1" />
                  <div className="text">
                    <h1 className="heading">{item.heading}</h1>
                    <p className="subheading">{item.description}</p>
                    <button className="btn">Shop Now</button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        
       </Swiper>
       </div>
     </Fragment>
      }
    </Fragment>
  );
}
