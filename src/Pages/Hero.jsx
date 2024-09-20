import React from 'react'
import Props from '../Props'
import Footer from './Footer'
import Enjoy from './Enjoy'

function Hero() {
  return (
   <>
   
   <section className='px-[11%] w-full  py-[9%] bg-center border-b-8 border-[#474747] relative text-center  md:px-[8%] sm:px-[5%] md:py-[7%] sm:py-[25%] ' style={{backgroundImage:`url('bg.jpg')` }}>
   <div className='flex flex-col items-center justify-center text-white  '>

         <h1 className='font-bold text-5xl leading-5 md:text-3xl sm:text-2xl'><Props heading='Unlimited movies, TV shows and more'/></h1>
         <h2 className='text-2xl md:text-xl sm:text-lg'><Props subheading='Watch anywhere. Cancel anytime.'/></h2>
         <p className='text-xl md:text-lg sm:text-base'><Props desc='Ready to watch? Enter your email to create or restart your membership.'/></p>

          <form className='flex sm:flex-col sm:items-center'>
      <div class="form-floating mb-3">
        <input type="email" className="form-control bg-transparent placeholder:bg-transparent rounded-md w-96 md:w-80 sm:w-72" id="floatingInput" placeholder="name@example.com"/>
        <label className='bg-transparent' for="floatingInput">Email address</label>
    </div>

            <button className='rounded-md bg-[#C11119] text-white font-semibold h-[56px] w-52 text-2xl ml-3 md:w-44 sm:w-36 md:text-xl sm:text-lg sm:h-10'>Get Started <i className="fa-solid fa-arrow-right"></i></button>
          </form>

       </div>
   </section>

   <Enjoy />
      <Footer />
   
   </>
  )
}

export default Hero