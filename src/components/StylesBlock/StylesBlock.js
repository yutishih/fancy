import React from 'react'
import "./StylesBlock.css"
import Styles1 from "./StylesImages/styles-1.png"
import Styles2 from "./StylesImages/styles-2.png"
import Styles3 from "./StylesImages/styles-3.png"
import Styles4 from "./StylesImages/styles-4.png"
import Styles5 from "./StylesImages/styles-5.png"
import Styles6 from "./StylesImages/styles-6.png"
import Styles7 from "./StylesImages/styles-7.png"

function StylesBlock() {
  return (
    <div>
        <div className='styles-block desktop flex'>
            <div>
                <div className='image-container flex'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles1} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles2} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
                <div className='image-container flex'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles3} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles4} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className='image-container'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles5} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className='image-container'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles6} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles7} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='styles-block mobile-block flex'>
            <div>
                <div className='image-container flex'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles1} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles2} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
                <div className='image-container flex'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles3} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles4} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='image-container'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles5} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
                <div className='image-container'>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles6} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                    <div className='wrapper relative p-1'>
                        <a>
                            <img src={Styles7} />
                            <span class="material-symbols-rounded">add</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StylesBlock