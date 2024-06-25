import Image from 'next/image'
import React from 'react'

const Rating = () => {
  return (
    <div className='z-50 overflow-hidden w-full border-b-[1.5px] border-[#FE752440] transition-[background,border,border-radius,box-shadow] duration-300 pt-[60px] pb-[40px]'>
      <div className='flex mx-auto relative'>
        <div className="container">
          <div className="slider-track gap-4 lg:gap-12">
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-1.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-1-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-2.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-2-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-3.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-3-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-4.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-4-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-5.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-5-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-6.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-6-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-7.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-7-color.png" width={200} height={200} alt="color-slider" />
            </div>

            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-1.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-1-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-2.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-2-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-3.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-3-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-4.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-4-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-5.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-5-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-6.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-6-color.png" width={200} height={200} alt="color-slider" />
            </div>
            <div className="slider-item group relative group">
              <Image className="transition-all duration-100" src="/slider_imgs/c4-logo-7.png" width={200} height={200} alt="slider" />
              <Image className="absolute top-[190%] left-0 transition-[top,transform,opacity] duration-[400ms] ease-in-out [transform-origin:right] rotate-[30deg] opacity-0 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" src="/slider_imgs/c4-logo-7-color.png" width={200} height={200} alt="color-slider" />
            </div>
  

          </div>
        </div>



      </div>

    </div>
  )
}

export default Rating