import React from 'react'
import Banner1 from '../images/banner-1.png'
import Banner2 from '../images/banner-2.png'
import Product1 from '../images/product-1.png'
import Carousel1 from '../components/Carousels/CarouselHalf1'

function Main() {
  return (
    <div className='main'>
      <div className='section-container'>
        <div>
          <a>
            <img  className='w-full' src={Banner1} />
          </a>
        </div>
      </div>
      <div className='section-container'>
        <div>
          <div className='text-container bg-grey py-2'>
            <p className='text-red text-center text-sm'><span className='font-medium	'>FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE.</span>
            {' '} CODE APPLIED AT CHECKOUT*
            </p>
          </div>
        </div>
      </div>
      <div className='section-container pb-6'>
        <div>
          <a>
            <img  className='w-full' src={Banner2} />
          </a>
        </div>
      </div>
      <div className='section-container product-block-1 pb-6'>
        <div className='flex'>
          <div className='relative w-1/2 pr-6'>
            <div className='absolute video-block'>
              <img src={Product1} className='w-full pr-4' />
              <div className='play-icon absolute'>
                <a className='absolute rounded-md'>
                  <span class="material-symbols-rounded text-9xl text-white">play_arrow</span>
                </a>
              </div>
              <div className='text-block'>
                <div className='text-center'>
                  <h2 className='text text-white text-xl'>New Collection</h2>
                  <h3 className='subtext text-6xl text-lightblue pt-8'>COLLEGEWEAR</h3>
                  <div className='text-button h-12 pt-12'>
                    <a className='px-12 py-4'>SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <Carousel1 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main