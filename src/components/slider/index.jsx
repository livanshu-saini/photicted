import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
// import img from "../../images/treeColoured.png"
import img1 from "../../images/treeColoured.png"
import img2 from "../../images/treeColoured.png"
import img3 from "../../images/treeColoured.png"
import img4 from "../../images/treeColoured.png"
import img5 from "../../images/treeColoured.png"





const dataObj = [
  { id: 1, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714377424/slider3_1_-2_twhiqw.jpg" },
  { id: 2, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714376917/slider2_rv9n97.jpg" },
  { id: 3, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714377750/1684124553582-01-2_enkcuf.jpg" },
  { id: 4, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714378418/1714378267830-01-2_dft3ya.jpg" },
  { id: 5, img: img4 },
  { id: 6, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1713268412/slider1_b4pgae.jpg" },

]


const Slider = () => {
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
        dataObj.map((ele) => (
          <SwiperSlide  key={ele.id} className='h-[80vh]'>
            <img src={ele.img} alt="Img" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider
