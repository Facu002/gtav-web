import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react'

function SwiperComponent(props) {
    // const listItems = props.imagenes.map((link) => 
    // // <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${link})`}}></SwiperSlide>
    // link
    // );
    // const colors = ['red', 'green', 'blue']
    var swiperSlides = [
        {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Slide 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Slide 2',
        description: 'Suspendisse ultricies purus a tempor dignissim.'
        },
        {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Slide 3',
        description: 'Sed suscipit justo eget nunc elementum, ac convallis ligula malesuada.'
        },
        {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Slide 4',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
        },
        {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Slide 5',
        description: 'Nullam dignissim tellus eget felis fermentum, sit amet dignissim nibh placerat.'
        },
        ];
    return (
        <Swiper
        // install Swiper modules
        modules={[Scrollbar]}
        spaceBetween={25}
        slidesPerView={"auto"}
        loop={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='swiper'
        >
        
        <div class="swiper-wrapper">
        {
            
            swiperSlides.forEach(function(slide) {
                var swiperSlide = document.createElement('div');
                swiperSlide.classList.add('swiper-slide');
                
                var image = document.createElement('img');
                image.src = slide.imageUrl;
                swiperSlide.appendChild(image);
                
                var title = document.createElement('h3');
                title.innerText = slide.title;
                swiperSlide.appendChild(title);
                
                var description = document.createElement('p');
                description.innerText = slide.description;
                swiperSlide.appendChild(description);
                
                })
        }
        </div>
        <div class="swiper-scrollbar"></div>

        </Swiper>
        
    )
}

export default SwiperComponent