import React from 'react'
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import React from 'react';
// import Swiper from 'swiper';



    // In the parent component, you can pass in the slides and other desired Swiper configuration as props:

    


function test(props) {
    const array  = props.imagenes;

    return (
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        // slidesPerGroup={2}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}

        
        className='swiper'
        >
        <div class="swiper-wrapper">
        {array.map((element, index) => (
            <SwiperSlide className='swiperSlide-img' key={index} style={{backgroundImage:`url(${element})`}}>
                {/* <span>caca</span> */}
            </SwiperSlide>
        ))}
        </div>
        </Swiper>
    );


}
export default test