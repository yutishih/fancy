import React from 'react'
import { useState } from 'react';
import Logo from '../images/logo.jpg'

function MobileMenu() {

  /*dropdown function*/
  const [ toggleOn, setToggleOn ] = useState(false);

  const toggleHandler = () => {
    if ( toggleOn == false ){
      setToggleOn(true);
    } else {
      setToggleOn(false);
    }
  }

  return (
    <div className='header-mobile'>
        <div className='menu-wrapper flex bg-white items-center justify-between p-2'>
            <div className='menu-left flex'>
                <div className='burgar'>
                    <a href="#" className='header-icon' onClick={toggleHandler}><span class="material-symbols-rounded">menu</span></a>
                </div>
                <div className='search pl-4'>
                    <a href="#" className='header-icon'><span className="material-symbols-rounded text-2xl">search</span></a>
                </div>
            </div>
            <div className='logo-mobile flex'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='menu-right flex'>
                <div className='account pr-4'>
                    <a href="#" className='header-icon'><span class="material-symbols-rounded">account_circle</span></a>
                </div>
                <div className='cart'>
                    <a href="#" className='header-icon'><span class="material-symbols-rounded">shopping_bag</span></a>
                </div>
            </div>
        </div>
        <div className={"dropdown-mobile" + ( toggleOn ? " " : " hide" )}>
            <div className='dropdown-inner absolute w-4/5 h-screen bg-white z-10'>
                <div className='menu-header flex justify-between py-2 px-4'>
                    <div className='header text-2xl'>Menu</div>
                    <div className='close' onClick={toggleHandler}>
                        <span class="material-symbols-rounded text-2xl">close</span>
                    </div>
                </div>
                <ul>
                    <li>
                        <a className='flex justify-between'>
                            <p>Home</p>
                            <span class="material-symbols-rounded">chevron_right</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex justify-between'>
                            <p>Home</p>
                            <span class="material-symbols-rounded">chevron_right</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex justify-between'>
                            <p>Home</p>
                            <span class="material-symbols-rounded">chevron_right</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex justify-between'>
                            <p>Home</p>
                            <span class="material-symbols-rounded">chevron_right</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex justify-between'>
                            <p>Home</p>
                            <span class="material-symbols-rounded">chevron_right</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex justify-between'>
                            <p>Home</p>
                            <span class="material-symbols-rounded">chevron_right</span>
                        </a>
                    </li>
                </ul>
                <div className='dropdown-bottom signin text-xl'>
                    <a className='flex'>
                        <span class="material-symbols-rounded text-2xl">account_circle</span>
                        <p className='pl-4'>Sign In</p>
                    </a>
                </div>
                <div className='dropdown-bottom signin text-xl'>
                    <a className='flex'>
                        <span class="material-symbols-rounded text-2xl">person_add</span>
                        <p className='pl-4'>Create An Account</p>
                    </a>
                </div>
                <div className='dropdown-bottom signin text-xl'>
                    <a className='flex'>
                        <span class="material-symbols-rounded text-2xl">favorite</span>
                        <p className='pl-4'>Your Wish List</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu