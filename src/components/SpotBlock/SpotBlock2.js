import React from 'react'
import "../SpotBlock/SpotBlock.css"
import Block5 from "../SpotBlock/BlockImages/block-5.png"
import Block6 from "../SpotBlock/BlockImages/block-6.png"
import Block7 from "../SpotBlock/BlockImages/block-7.png"
import Block8 from "../SpotBlock/BlockImages/block-8.png"

function SpotBlock1() {
  return (
    <div className='spotblock-wrapper'>
        <div className='full-container desktop flex'>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block5} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>FORMAL</a>
                </div>
            </div>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block6} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>SWIMWEAR</a>
                </div>
            </div>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block7} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>SHOES</a>
                </div>
            </div>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block8} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>ACCESSORIES</a>
                </div>
            </div>
        </div>
        <div className='full-container mobile-block'>
            <div className='flex'>
                <div className='block-container relative w-1/2 px-1 py-1'>
                    <div className='image-container'>
                        <img src={Block5} />
                    </div>
                    <div className='text-container absolute text-center'>
                        <a className='px-12 py-4 text-xl'>FORMAL</a>
                    </div>
                </div>
                <div className='block-container relative w-1/2 px-1 py-1'>
                    <div className='image-container'>
                        <img src={Block6} />
                    </div>
                    <div className='text-container absolute text-center'>
                        <a className='px-12 py-4 text-xl'>SWIMWEAR</a>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='block-container relative w-1/2 px-1 py-1'>
                    <div className='image-container'>
                        <img src={Block7} />
                    </div>
                    <div className='text-container absolute text-center'>
                        <a className='px-12 py-4 text-xl'>SHOES</a>
                    </div>
                </div>
                <div className='block-container relative w-1/2 px-1 py-1'>
                    <div className='image-container'>
                        <img src={Block8} />
                    </div>
                    <div className='text-container absolute text-center'>
                        <a className='px-12 py-4 text-xl'>ACCESSORIES</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpotBlock1