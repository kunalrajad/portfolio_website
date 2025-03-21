import React, { useRef , useEffect, useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {

        const [isScroll, setIsScroll] = useState(false)

        const sideMenuRef = useRef();

        const openMenu = () =>{
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }

        const closeMenu = () =>{
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }

        useEffect(()=>{
            window.addEventListener('scroll', ()=>{
                if(scrollY > 50){
                    setIsScroll(true)
                }else{
                    setIsScroll(false)
                }
            })
        }, [])

    return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} priority={true} alt='header' className='w-full'/>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            {/* This allows the logo with my name on it to be at the top left of the website */}
            <a href = "#top">
                <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14'/>
            </a>

            {/* This allows the home, about me, and other titles to be in the center top of the webpage */}
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8
            rouded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About Me</a></li>
                <li><a className='font-Ovo' href="#education">Education</a></li>
                <li><a className='font-Ovo' href="#experiences">Experiences</a></li>
                <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
            </ul>

            {/* This is for the contact me section that is aligned in the top right of the website */}
            <div className='flex items-center gap-4'>

                <a href="contact" className='hidden lg:flex items-center gap-3
                px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image
                src={assets.arrow_icon} className='w-3'/></a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='menu' className='w-6'/>
                </button>
            </div>

            {/* mobile menu */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer'/>
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#education">Education</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#experiences">Experiences</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
