import React from 'react'
import "../SpotBlock/SpotBlock.css"
import Block1 from "../SpotBlock/BlockImages/block-1.png"
import Block2 from "../SpotBlock/BlockImages/block-2.png"
import Block3 from "../SpotBlock/BlockImages/block-3.png"
import Block4 from "../SpotBlock/BlockImages/block-4.png"

function SpotBlock1() {
  return (
    <div>
        <div className='full-container flex'>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block1} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>TOPS</a>
                </div>
            </div>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block2} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>BOTTOMS</a>
                </div>
            </div>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block3} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>CAUSAL</a>
                </div>
            </div>
            <div className='block-container relative w-1/4 px-1'>
                <div className='image-container'>
                    <img src={Block4} />
                </div>
                <div className='text-container absolute text-center'>
                    <a className='px-12 py-4 text-xl'>DRESSES</a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default SpotBlock1