import React from 'react'
import Banner1 from '../images/banner-1.png'
import Banner2 from '../images/banner-2.png'
import Banner3 from '../images/banner-3.png'
import Banner4 from '../images/banner-4.png'
import Banner5 from '../images/banner-5.png'
import Banner6 from '../images/banner-6.png'
import Product1 from '../images/product-1.png'
import Product12 from '../images/product-12.png'
import Carousel1 from './Carousels/CarouselHalf1'
import Carousel2 from './Carousels/CarouselHalf2'
import CarouselFull from './Carousels/CarouselFull'
import CarouselFull2 from './Carousels/CarouselFull2'
import SpotBlock1 from './SpotBlock/SpotBlock1'
import SpotBlock2 from './SpotBlock/SpotBlock2'
import StylesBlock from './StylesBlock/StylesBlock'
import News from './News'
import About from './About'
import Footer from './Footer'
import mobile1 from '../images/mobile-1.png'
import mobile2 from '../images/mobile-2.png'
import mobile3 from '../images/mobile-3.png'
import mobile4 from '../images/mobile-4.png'
import mobile5 from '../images/mobile-5.png'
import mobile6 from '../images/mobile-6.png'

function Main() {
  return (
    <div className='main'>
      <div className='section-container'>
        <div>
          <a className='desktop-image'>
            <img  className='w-full' src={Banner1} />
          </a>
          <a className='mobile-image'>
            <img  className='w-full' src={mobile1} />
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
          <a className='desktop-image'>
            <img  className='w-full' src={Banner2} />
          </a>
          <a className='mobile-image'>
            <img  className='w-full' src={mobile2} />
          </a>
        </div>
      </div>

      <div className='section-container product-block-1 pb-6'>
        <div className='flex max-md:block'>
          <div className='relative w-1/2 max-md:w-full pr-6 max-md:p-0'>
            <div className='absolute max-md:relative video-block'>
              <img src={Product1} className='w-full pr-4 max-md:pr-0 max-md:pb-4' />
              <div className='text-block'>
                <div className='text-center'>
                  <h2 className='text text-black text-xl'>New Collection</h2>
                  <h3 className='subtext text-6xl text-yellow pt-8'>COLLEGEWEAR</h3>
                  <div className='text-button h-12 pt-12'>
                    <a className='px-12 py-4'>SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 max-md:w-full max-md:px-1'>
            <Carousel1 />
          </div>
        </div>
      </div>

      <div className='section-container product-block-1 pb-10 max-md:pb-4'>
        <div className='flex max-md:block'>
          <div className='w-1/2 max-md:w-full max-md:px-1 max-md:pb-4'>
            <Carousel2 />
          </div>
          <div className='relative w-1/2 max-md:w-full pr-6 max-md:p-0'>
            <div className='absolute max-md:relative video-block'>
              <img src={Product12} className='w-full pr-4 max-md:pr-0 max-md:pb-4' />
              <div className='text-block'>
                <div className='text-center'>
                  <h2 className='text text-black text-xl'>Swimsuit Collection</h2>
                  <h3 className='subtext text-6xl text-yellow pt-8'>SUMMER’NOW</h3>
                  <div className='text-button h-12 pt-12'>
                    <a className='px-12 py-4'>SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <a className='desktop-image'>
            <img  className='w-full' src={Banner3} />
          </a>
          <a className='mobile-image'>
            <img  className='w-full' src={mobile3} />
          </a>
        </div>
      </div>

      <div className='section-container pb-8'>
        <div className='full-carousel w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl max-md:text-xl'><span>FLASH SALE</span></h3>
          </div>
          <CarouselFull />
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <a className='desktop-image'>
            <img  className='w-full' src={Banner4} />
          </a>
          <a className='mobile-image'>
            <img  className='w-full' src={mobile4} />
          </a>
        </div>
      </div>

      <div className='section-container pb-2 max-md:pb-0'>
        <div>
          <SpotBlock1 />
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <SpotBlock2 />
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <a className='desktop-image'>
            <img  className='w-full' src={Banner5} />
          </a>
          <a className='mobile-image'>
            <img  className='w-full' src={mobile5} />
          </a>
        </div>
      </div>

      <div className='section-container pb-12'>
        <div className='full-carousel w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl max-md:text-xl'><span>NEW ARRIVAL</span></h3>
          </div>
          <CarouselFull2 />
        </div>
      </div>

      <div className='section-container pb-8'>
        <div className='full-styles w-full pt-8 px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl max-md:text-xl'><span>SHARE YOUR STYLE</span></h3>
          </div>
            <StylesBlock />
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <a className='desktop-image'>
            <img  className='w-full' src={Banner6} />
          </a>
          <a className='mobile-image'>
            <img  className='w-full' src={mobile6} />
          </a>
        </div>
      </div>

      <div className='section-container pb-12'>
        <div className='news-section w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl max-md:text-xl'><span>ELLA NEWS</span></h3>
          </div>
          <News />
        </div>
      </div>

      <div className='section-container pb-12'>
        <div className='about-section w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl max-md:text-xl'><span>ABOUT ELLA</span></h3>
          </div>
          <About />
        </div>
      </div>

      <div className='section-container'>
        <div className='footer-section'>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Main