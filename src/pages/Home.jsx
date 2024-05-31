import React from 'react'
import Swiper from 'swiper'

const swiper = new Swiper('.swiper', {
  speed: 400,
  // spaceBetween: 100,
  // direction: 'vertical',
  // loop: true,
  autoplay: {
    delay: 5000,
  },
})
const Home = () => {
  return (
    <div className='  w-full h-[calc(100vh-148px)] px-10 flex gap-5 relative'>
      <img src="/images/cover_imgs/queenOT.webp" alt="" className=' absolute top-0 left-0 w-[60%] h-full px-10 brightness-[70%]' />
      <div className=" bg-orange-300 z-20 absolute bottom-0">
        <h1>Posters</h1>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">slide1</div>
            <div className="swiper-slide">slide2</div>
            <div className="swiper-slide">slide3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
