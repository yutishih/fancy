import React from 'react'
import {useState} from 'react'
import '../components/components.css'
import Logo from '../images/logo.jpg'

function StickyHeader() {

  const [isShown, setIsShown] = useState(false);

  const shownHandler = () => {
    if(isShown == false){
      setIsShown(true);
    }else{
      setIsShown(false);
    }
  }


  return (
    <div className='header-wrapper relative block h-32'>
      <div className='header'>
        <div className='header-top-wrapper bg-black flex flex-nowrap justify-between items-center'>
          <div className='header-top-left block relative text-left'>
            <ul className='header-top-left-list flex items-center'>
              <li className='item inline-block bg-white p-5 font-extrabold'>WOMEN</li>
              <li className='item inline-block bg-blue text-white p-5 font-extrabold'>MEN</li>
              <li className='item inline-block bg-green text-white p-5 font-extrabold'>KIDS</li>
            </ul>
          </div>
          <div className='header-top-right flex space-x-4 items-center text-right pr-5'>
            <div className='header-right-location inline-block w-96 text-white mr-[4.5%]'>
              <a className='underline underline-offset-6' href="#">EXTRA 10% OFF</a>
              {' '}ON FIRST ORDER
            </div>
            <div className='header-right-group flex space-x-4 text-white'>
              <a href="#" className='header-icon'><span class="material-symbols-rounded">account_circle</span></a>
              <a href="#" className='header-icon'><span class="material-symbols-rounded">favorite</span></a>
              <a href="#" className='header-icon'><span class="material-symbols-rounded">shopping_bag</span></a>
              <div className='header-icon-item'>
                <div className='live-help'><span class="material-symbols-rounded">headset_mic</span></div>
                <div className='live-help-group'></div>
              </div>
              <div className='header-icon-item'>
                <a href="#" className='header-icon'><span class="material-symbols-rounded">language</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className='header-bottom-wrapper flex items-center justify-between h-16'>
          <div className='container flex items-center px-8'>
            <div className='header-bottom-left'>
              <div className='logo'><img src={Logo} alt="Logo" /></div>
            </div>
            <div className='header-bottom-center pl-12'>
              <div className='header-nav-list'>
                <ul className='flex space-x-2 text-sm font-medium'>
                  <li><a onMouseEnter={shownHandler}><span>Theme Demo</span></a></li>
                  <li><a><span>Shop</span></a></li>
                  <li><a><span>Product</span></a></li>
                  <li><a><span>Blog</span></a></li>
                  <li><a><span>Pages</span></a></li>
                  <li><a><span>New In</span></a></li>
                  <li><a><span>Trend</span></a></li>
                  <li><a><span>Collections</span></a></li>
                  <li><a><span className='text-red'>Buy Ella</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='header-bottom-right flex pr-16'>
            <input type="text" placeholder="search the store"></input>
            <button className='bg-black px-2 pt-2 pb-1'><span class="material-symbols-rounded text-white">search</span></button>
          </div>
        </div>
        <div className='drop-down'>
          <div className='drop-down-container mb-4'>
            {isShown && (
              <div className='drop-down-wrapper-1 flex bg-white pb-6' onMouseLeave={shownHandler}>
                <div className='list-wrapper w-1/5 p-4'>
                  <p className='py-4'>HOMEPAGES</p>
                  <ul>
                    <li><a>Home 01 - Classic</a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                  </ul>
                </div>
                <div className='list-wrapper w-1/5 p-4'>
                  <p className='py-4'>HOMEPAGES</p>
                  <ul>
                    <li><a>Home 01 - Classic</a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                  </ul>
                </div>
                <div className='list-wrapper w-1/5 p-4'>
                  <p className='py-4'>HOMEPAGES</p>
                  <ul>
                    <li><a>Home 01 - Classic</a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                  </ul>
                </div>
                <div className='list-wrapper w-1/5 p-4'>
                  <p className='py-4'>HOMEPAGES</p>
                  <ul>
                    <li><a>Home 01 - Classic</a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                  </ul>
                </div>
                <div className='list-wrapper w-1/5 p-4'>
                  <p className='py-4'>HOMEPAGES</p>
                  <ul>
                    <li><a>Home 01 - Classic</a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                    <li><a>Home 02 - Trendy Style </a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyHeader