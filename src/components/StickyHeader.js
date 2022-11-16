import React from 'react'

import '../components/components.css'

function StickyHeader() {
  return (
    <div className='header-wrapper relative block h-32'>
      <div className='header'>
        <div className='header-top-wrapper bg-black flex flex-nowrap justify-between items-center pr-30px min-h-60'>
          <div className='header-top-left block relative text-left'>
            <ul className='header-top-left-list flex items-center'>
              <li className='item inline-block bg-white p-5 font-extrabold'>WOMEN</li>
              <li className='item inline-block bg-blue text-white p-5 font-extrabold'>MEN</li>
              <li className='item inline-block bg-green text-white p-5 font-extrabold'>KIDS</li>
            </ul>
          </div>
          <div className='header-top-right inline-block items-center text-right'>
            <div className='header-right-location inline-block text-white'>
              <a className='underline underline-offset-8' href="#">EXTRA 10% OFF</a>
              {' '}ON FIRST ORDER
            </div>
            <div className='header-right-group inline-block'>
              <a href="#" className='header-icon'></a>
              <a href="#" className='header-icon'></a>
              <a href="#" className='header-icon'></a>
              <div className='header-icon-item'>
                <div className='live-help'></div>
                <div className='live-help-group'></div>
              </div>
              <div className='header-icon-item'>
                <a href="#" className='header-icon'></a>
              </div>
            </div>
          </div>
        </div>
        <div className='header-bottom-wrapper'>
          <div className='container'>
            <div className='header-bottom-left'>
              <div className='logo'></div>
            </div>
            <div className='header-bottom-center'>
              <div className='header-nav-list'>
                <ul>
                  <li className="inline-block"><a><span>Theme Demo</span></a></li>
                  <li className="inline-block"><a><span>Shop</span></a></li>
                  <li className="inline-block"><a><span>Product</span></a></li>
                  <li className="inline-block"><a><span>Blog</span></a></li>
                  <li className="inline-block"><a><span>Pages</span></a></li>
                  <li className="inline-block"><a><span>New In</span></a></li>
                  <li className="inline-block"><a><span>Trend</span></a></li>
                  <li className="inline-block"><a><span>Collections</span></a></li>
                  <li className="inline-block"><a><span>Buy</span></a></li>
                </ul>
              </div>
            </div>
            <div className='header-bottom-left'>
              <input type="text" placeholder="search the store"></input>
            </div>
          </div>
        </div>
        <div className='header-mobile-wrapper'></div>
      </div>
    </div>
  )
}

export default StickyHeader