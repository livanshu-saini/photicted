import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
// import img from "../../images/treeColoured.png"
// import img1 from "../../images/treeColoured.png"
// import img2 from "../../images/treeColoured.png"
// import img3 from "../../images/treeColoured.png"
// import img4 from "../../images/treeColoured.png"
// import img5 from "../../images/treeColoured.png"





const dataObj = [
  { id: 1, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714379325/IMG_20240429_135535_h5rggm.jpg" },
  { id: 2, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714379732/IMG_20240429_140452_idyrpp.jpg" },
  { id: 3, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714379326/IMG_20240429_135551_ap2gvq.jpg" },
  { id: 4, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714379323/IMG_20240429_135519_ln8rwg.jpg" },
  { id: 5, img: "https://res.cloudinary.com/dp85jk67f/image/upload/v1714379323/IMG_20240429_135455_zep4sw.jpg" },

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
            <img src={ele.img} alt="Img"/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider
