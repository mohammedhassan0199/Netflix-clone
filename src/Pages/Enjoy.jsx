import React from 'react'
import Props from '../Props'
// import '../style.css'
import { accordionData } from '../utilities/content';
import Accordion from '../Accordion';
import Maps from '../Maps';



function Enjoy() {
  return (
    <>
        <section className='flex justify-between items-center sm:flex-col px-[11%] bg-black py-[3%]  md:px-[8%] sm:px-[5%] border-b-8 border-[#232323] text-white  sm:text-center sm:py-[16%]'>
            <div className='w-[50%] sm:w-full'>
                <h2 className='font-bold text-5xl leading-5 md:text-3xl sm:text-2xl'><Props subheading='Enjoy on your TV'/></h2>
                <p className='text-2xl md:text-xl sm:text-lg'><Props desc='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'/></p>
            </div>

            <div className='w-[50%] sm:w-full'><Props url='tv.png'/></div>
        </section>

        <section className='flex justify-between items-center px-[11%] bg-black py-[3%] border-b-8 border-[#232323] text-white sm:flex-col-reverse md:px-[8%] sm:px-[5%] sm:text-center sm:py-[16%]'>
            <div className='w-[48%] sm:w-full'><Props url='mobile.jpg'/></div>

            <div className='w-[48%] sm:w-full'>
                <h2 className='font-bold text-5xl leading-5  md:text-3xl sm:text-2xl'><Props subheading='Download your shows to watch offline'/></h2>
                <p className='text-2xl  md:text-xl sm:text-lg'><Props desc='Save your favourites easily and always have something to watch.'/></p>
            </div>
        </section>

        <section className='flex justify-between items-center px-[11%] bg-black py-[3%] border-b-8 border-[#232323] text-white sm:text-center  md:px-[8%] sm:px-[5%] sm:flex-col sm:py-[16%]'>
            <div className='w-[50%] sm:w-full'>
                <h2 className='font-bold text-5xl leading-5  md:text-3xl sm:text-2xl'><Props subheading='Watch everywhere'/></h2>
                <p className='text-2xl  md:text-xl sm:text-lg'><Props desc='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'/></p>
            </div>

            <div className='w-[50%] sm:w-full'><Props url='device.png'/></div>
        </section>

        <section className='flex justify-between items-center px-[11%] bg-black py-[3%] border-b-8 border-[#232323] text-white  md:px-[8%] sm:px-[5%] sm:flex-col-reverse sm:text-center sm:py-[16%]'>
            <div className='w-[48%] sm:w-full'><Props url='children.png'/></div>

            <div className='w-[48%] sm:w-full'>
                <h2 className='font-bold text-5xl leading-5  md:text-3xl sm:text-2xl'><Props subheading='Create profiles for kids'/></h2>
                <p className='text-2xl  md:text-xl sm:text-lg'><Props desc='SaveSend children on adventures with their favourite characters in a space made just for them—free with membership.'/></p>
            </div>
        </section>

        <section className='px-[11%] py-[5.5%]  bg-black text-white flex flex-col  border-b-8 border-[#232323]  md:px-[8%] sm:px-[5%] '>

        <h2 className='font-bold text-5xl leading-5  md:text-3xl sm:text-2xl  text-center'><Props subheading='Frequently Asked Questions'/></h2>
        

        <Maps />

        <h3 className='text-xl  text-center sm:text-lg  '><Props innerheading='Ready to watch? Enter your email to create or restart your membership.'/></h3>
        <form className='flex  sm:flex-col sm:items-center justify-center' >
      <div class="form-floating mb-3">
        <input type="email" className="form-control bg-black  text-white  rounded-md w-96 md:w-80 sm:w-72" id="floatingInput" placeholder="name@example.com"/>
        <label className='' for="floatingInput">Email address</label>
    </div>

            <button className='rounded-md bg-[#C11119] text-white font-semibold h-[56px] w-52 text-2xl ml-3 md:w-44 sm:w-36 md:text-xl sm:text-lg sm:h-10'>Get Started<i className="fa-solid fa-arrow-right"></i> </button>
          </form>

        </section>
    </>
  )
}

export default Enjoy