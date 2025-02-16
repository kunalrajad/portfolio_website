import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Contact() {
  return (
    <div id='contact' className='w-full px-[12%] py-10
    scrol-mt-20'>
        <h2 className='text-center mb-4 text-5xl font-Ovo'>
            Contact Me</h2>

        <h2 className='text-center text-3xl font_ovo'>
            Get In Touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I would love to hear from you. If you have any questions, comments, or feedback,
            please use the form below to contact me.
        </p>

        <form className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' required
                className='flex-1 p-3 outline-non border-[0.5px] border-gray-400
                rounded-md bg-white'/>
                <input type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-non border-[0.5px] border-gray-400
                rounded-md bg-white'/>
            </div>

            <textarea rows='6' placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6'></textarea>

            <button type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black
            80 text-white rounded-full mx-auto hover:bg-blac duration-500'
            >Submit Here <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>
        </form>

    </div>
  )
}

export default Contact
