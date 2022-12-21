import React from 'react'
import Email from "../images/email.png"
import Phone from "../images/phone.png"
import Chat from "../images/chat.png"

function About() {
  return (
    <div>
        <div className='about-container text-center w-full'>
            <div className='text-container'>
                <p>Pellentesque sit amet porta purus. Aliquam quis elementum velit. Donec ipsum mi, auctor nec erat eu, consequat semper justo. Nulla eros
velit, semper eu mollis id, efficitur consectetur est. Vestibulum lacus ex, facilisis sit amet mauris sit amet, tempus cursus felis.
Curabitur nec luctus lorem, at vehicula enim.</p>
            </div>
            <div className='contact-container'>
                <div className='item-wrapper flex place-content-center pt-10'>
                    <div className='item item-email px-16'>
                        <img src={Email} />
                        <div className='text pt-4'>
                            <p>Email Us</p>
                            <p className='underline'>Submit Form</p>
                        </div>
                    </div>
                    <div className='item item-email px-16'>
                        <img src={Phone} />
                        <div className='text pt-4'>
                            <p>Call Us</p>
                            <p className='underline'>(018) 900-6690</p>
                        </div>
                    </div>
                    <div className='item item-email px-16'>
                        <img src={Chat} />
                        <div className='text pt-4'>
                            <p>Live Chat</p>
                            <p className='underline'>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About