import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import img from "../../images/treeColoured.png"
import img1 from "../../images/treeColoured.png"
import img2 from "../../images/treeColoured.png"
import img3 from "../../images/treeColoured.png"
import img4 from "../../images/treeColoured.png"
import img5 from "../../images/treeColoured.png"





const dataObj = [
  { id: 1, img: img },
  { id: 2, img: img1 },
  { id: 3, img: img2 },
  { id: 4, img: img3 },
  { id: 5, img: img4 },
  { id: 6, img: img5 },

]



import React from 'react'

const Slider = ({ children }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper mt-[4.5rem]"
    >
      {
        dataObj.map((ele, idx) => (
          <SwiperSlide key={ele.id} className='h-[80vh]'>
            <img src={ele.img} alt="Img" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider
