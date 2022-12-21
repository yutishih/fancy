import React from 'react'
import News1 from '../images/news-1.png'
import News2 from '../images/news-2.png'
import News3 from '../images/news-3.png'
import News4 from '../images/news-4.png'

function News() {
  return (
    <div>
        <div className='flex'>
            <div className='news-container pr-2'>
                <div className='image-container'>
                    <img src={News1} />
                </div>
                <div className='text-container text-center text-xl pt-8'>
                    <a>LEARN MORE</a>
                </div>
            </div>
            <div className='news-container px-1'>
                <div className='image-container'>
                    <img src={News2} />
                </div>
                <div className='text-container text-center text-xl pt-8'>
                    <a>SHOP NOW</a>
                </div>
            </div>
            <div className='news-container px-1'>
                <div className='image-container'>
                    <img src={News3} />
                </div>
                <div className='text-container text-center text-xl pt-8'>
                    <a>ASK FOR APPOINTMENT</a>
                </div>
            </div>
            <div className='news-container pl-2'>
                <div className='image-container'>
                    <img src={News4} />
                </div>
                <div className='text-container text-center text-xl pt-8'>
                    <a>LEARN MORE</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default News