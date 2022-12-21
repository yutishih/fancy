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

      <div className='section-container product-block-1 pl-2 pb-10'>
        <div className='flex'>
          <div className='w-1/2 pr-3'>
            <Carousel2 />
          </div>
          <div className='relative w-1/2'>
            <div className='absolute video-block'>
              <img src={Product12} className='w-full' />
              <div className='play-icon absolute'>
                <a className='absolute rounded-md'>
                  <span class="material-symbols-rounded text-9xl text-white">play_arrow</span>
                </a>
              </div>
              <div className='text-block'>
                <div className='text-center'>
                  <h2 className='text text-white text-xl'>Swimsuit Collection</h2>
                  <h3 className='subtext text-6xl text-lightblue pt-8'>SUMMER’NOW</h3>
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
          <a>
            <img  className='w-full' src={Banner3} />
          </a>
        </div>
      </div>

      <div className='section-container pb-8'>
        <div className='full-carousel w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl'><span>FLASH SALE</span></h3>
          </div>
          <CarouselFull />
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <a>
            <img  className='w-full' src={Banner4} />
          </a>
        </div>
      </div>

      <div className='section-container pb-2'>
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
          <a>
            <img  className='w-full' src={Banner5} />
          </a>
        </div>
      </div>

      <div className='section-container pb-12'>
        <div className='full-carousel w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl'><span>NEW ARRIVAL</span></h3>
          </div>
          <CarouselFull2 />
        </div>
      </div>

      <div className='section-container pb-8'>
        <div className='full-styles w-full pt-8 px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl'><span>SHARE YOUR STYLE</span></h3>
          </div>
            <StylesBlock />
        </div>
      </div>

      <div className='section-container pb-6'>
        <div>
          <a>
            <img  className='w-full' src={Banner6} />
          </a>
        </div>
      </div>

      <div className='section-container pb-12'>
        <div className='news-section w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl'><span>ELLA NEWS</span></h3>
          </div>
          <News />
        </div>
      </div>

      <div className='section-container pb-12'>
        <div className='about-section w-full px-2'>
          <div className='pb-4'>
            <h3 className='text-center text-3xl'><span>ABOUT ELLA</span></h3>
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