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
    // let swiperSlides = props.imagenes
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
                
                // swiper.appendSlide(swiperSlide);
                })
            // console.log(listItems)
            // listItems.forEach((element) => {
            // <SwiperSlide className='swiper-img' >
            // {/* </SwiperSlide> */}
            // console.log(<img src={element} key={element}/>)
            // })
            // console.log(props.imagenes)
        }
        {/* <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image1})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image2})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image3})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image4})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image5})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image6})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image7})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image8})`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url(${props.image9})`}}></SwiperSlide> */}


        {/* <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/84926840c1c25b5a718fb3d3e004e54077a802e1.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/389d37a47b81f4cbbb33068a43aa7a6e8150a123.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3b9950ead7b1efe87819baca850315474b3f901c.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1f303bc078dba6be23766d89917d98689e3b610.jpg')`}}></SwiperSlide> 
        */}
        </div>
        <div class="swiper-scrollbar"></div>

        {/* 
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8e083b54e63db8a5e40dfb4f0de00ce1adcf1dac.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/84926840c1c25b5a718fb3d3e004e54077a802e1.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/389d37a47b81f4cbbb33068a43aa7a6e8150a123.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3b9950ead7b1efe87819baca850315474b3f901c.jpg')`}}></SwiperSlide>
        <SwiperSlide className='swiper-img' style={{backgroundImage:`url('https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1f303bc078dba6be23766d89917d98689e3b610.jpg')`}}></SwiperSlide>  */}
        
        {/* <SwiperSlide className='swiper-img' ><img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/26b3c013691c5f01c8bff0e1891e7bf4a6bd9da9.jpg'/></SwiperSlide>
        <SwiperSlide className='swiper-img'><img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8e083b54e63db8a5e40dfb4f0de00ce1adcf1dac.jpg'/></SwiperSlide>
        <SwiperSlide className='swiper-img'><img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/84926840c1c25b5a718fb3d3e004e54077a802e1.jpg'/></SwiperSlide>
        <SwiperSlide className='swiper-img'><img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/389d37a47b81f4cbbb33068a43aa7a6e8150a123.jpg'/></SwiperSlide>
        <SwiperSlide className='swiper-img'><img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3b9950ead7b1efe87819baca850315474b3f901c.jpg'/></SwiperSlide>
        <SwiperSlide className='swiper-img'><img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1f303bc078dba6be23766d89917d98689e3b610.jpg'/></SwiperSlide> */}

        {/* <SwiperSlide className='swiper-img' ></SwiperSlide> */}
        
        


        </Swiper>
        
    )
}

export default SwiperComponent