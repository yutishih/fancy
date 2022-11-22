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
      <div className='section-container pb-6'>
        <div>
          <div className='column-6'>
            <div>
              <img src={Product1} />
            </div>
          </div>
          <div className='column-6'>
            {/* <Carousel1 /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main