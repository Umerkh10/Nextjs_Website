import Image from 'next/image'
import React from 'react'

const Rating = () => {
  return (
    <div className='z-50 overflow-hidden w-full border-b-[1.5px] border-[#FE752440] transition-[background,border,border-radius,box-shadow] duration-300 pt-[60px] pb-[40px]'>
      <div className='flex mx-auto relative'>
        <div className="container">
          <div className="slider-track items-center h-[10vh] gap-4 lg:gap-12">
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-1.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-2.png" width={200} height={200} alt="slider" />

            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-3.png" width={160} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-4.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-5.png" width={160} height={100} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-6.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-7.png" width={200} height={200} alt="slider" />
            </div>

            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-1.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-2.png" width={200} height={200} alt="slider" />

            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-3.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-4.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-5.png" width={160} height={100} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-6.png" width={200} height={200} alt="slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/slider-7.png" width={200} height={200} alt="slider" />
            </div>

          </div>
        </div>



      </div>

    </div>
  )
}

export default Rating