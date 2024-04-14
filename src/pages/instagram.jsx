import React from 'react'
import instaReel from "../assets/insta.mp4"
import { FaInstagram } from "react-icons/fa";

const InstagramPage = () => {
  return (
    <div className='flex flex-row flex-1 justify-center items-center '>
      <div className='flex-1 justify-center items-center flex'>
        <video src={instaReel}
          autoPlay={true}
          // controls
          loop={true}
          className='h-[75vh] rounded-xl bx_shadow'
          
        ></video>
      </div>
      <div className='flex flex-1 flex-col justify-center items-center gap-8'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-4xl tx_shadow'>
            a lot more to see, a lot more to shoot
          </h1>
          <h4 className='text-xl'>showcasing some frames in my vicinity</h4>
        </div>
        <button className='flex gap-2 justify-center items-center bg-bgWhite p-2 rounded-sm'>
          <FaInstagram 
            size={32}
          />
          <span className='text-2xl'>instagram</span>
        </button>
      </div>
    </div>
  )
}

export default InstagramPage
