import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer-wrapper bg-black py-12'>
        <div className='flex'>
            <div className='left-section w-1/2 flex place-content-center mt-8'>
                <div>
                    <div className='signup'>
                        <div className='text text-center text-white text-xl pb-4'>SIGN UP FOR NEWSLETTER</div>
                        <div className='email-input'>
                            <div className='p-2'>
                                <input type="text" placeholder="enter your email address"></input>
                                <button className='submit-button'><span className='text-bronze'>SUBMIT</span></button>
                            </div>
                        </div>
                        <div className='privacy flex pt-4'>
                            <input type="checkbox"></input>
                            
                            <p className='text-bronze pt-1 pl-4 w-4/5'>By providing your email, you consent to our <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms & Conditions</span>.</p>
                        </div>
                    </div>
                    <div className='social'>
                        <div className='text text-center text-white text-xl pt-12 pb-4'>FOLLOW US</div>
                        <div>
                            <ul className='flex place-content-center'>
                                <li className='px-2'><SocialIcon network="facebook" bgColor="#111" fgColor="#fff" /></li>
                                <li className='px-2'><SocialIcon network="instagram" bgColor="#111" fgColor="#fff" /></li>
                                <li className='px-2'><SocialIcon network="twitter" bgColor="#111" fgColor="#fff" /></li>
                                <li className='px-2'><SocialIcon network="pinterest" bgColor="#111" fgColor="#fff" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-section w-1/2 flex text-white place-content-center text-center mt-8'>
                <div className='list-wrapper'>
                    <p className='text-xl'>SHOP BY</p>
                    <ul>
                        <li>New In</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Shoes</li>
                        <li>Bags & Accessories</li>
                        <li>Top Brands</li>
                        <li>Sale & Special Offers</li>
                    </ul>
                </div>
                <div className='list-wrapper'>
                    <p className='text-xl'>INFORMATION</p>
                    <ul>
                        <li>About</li>
                        <li>Customer Service</li>
                        <li>Reward Program</li>
                        <li>Shipping & Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='list-wrapper'>
                    <p className='text-xl'>CUSTOMER SERVICE</p>
                    <ul>
                        <li>Search Terms</li>
                        <li>Advanced Search</li>
                        <li>Orders And Returns</li>
                        <li>Contact Us</li>
                        <li>Theme FAQs</li>
                        <li>Consultant</li>
                        <li>Store Locations</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bottom pt-16'>
            <div className='text-center text-brown text-sm'>© 2022 Ella Demo. Powaered By Shopify. Shopify Themes & Templates By HaloThemes.Com.</div>
        </div>
    </div>
  )
}

export default Footer