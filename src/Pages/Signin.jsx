import React from 'react'
import Footer from './Footer'
import Props from '../Props'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

function Signin() {
  const {register,handleSubmit,control,formState: {errors} , } = useForm()
  const onSubmit =(data) =>{
      console.log(data);
  }
  return (
    <>
     <section className=' bg-center flex justify-center px-[11%]  md:px-[8%] sm:px-[5%] border-b-8 border-[#474747]' style={{backgroundImage:`url('bg.jpg')`}} >
      <form className='py-[2%] px-[4%] bg-black rounded-md   backdrop-filter backdrop-blur-sm bg-opacity-10 text-white ' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-bold text-[32px]'><Props heading='Sign In'/></h1>
          <div class="form-floating mb-3">
        <input type="email" className="form-control bg-transparent placeholder:bg-transparent rounded-md w-96 md:w-80 sm:w-72" id="floatingInput" placeholder="name@example.com" {...register("email" ,{required:"This feild is required"})} aria-invalid={errors.mail ? "true" : "falese"}/>
        <ErrorMessage 
                    
                        errors={errors}
                        name="email"
                        render={({message}) =><h2 className="text-red-700">{message}</h2>}
                    
                    />
        <label className='bg-transparent' for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
        <input type="Password" className="form-control bg-transparent placeholder:bg-transparent rounded-md w-96 md:w-80 sm:w-72" id="floatingInput" placeholder="Password" {...register("password" ,{required:"This feild is required"})}/>
        <ErrorMessage
                    
                    errors={errors}
                    name="password"
                    render={({message})=><h2 className="text-red-700">{message}</h2>}
                
                />
        <label className='bg-transparent' for="floatingInput">Password</label>
    </div>
    <a href='#signin' className='flex items-center bg-[#C71018] h-11  justify-center rounded-md'>
    <Props btn='Sign in'/></a>
    <a className='text-[#AFAFA7] flex justify-center my-4 hover:underline hover:text-[#9b9b97] ' href=""><Props link='Forget password'/></a>

   <div className='flex items-center'>
   <input type="checkbox" className='text-black w-6 h-6 mr-3'/> 
   <label htmlFor="">Remember me</label>
   </div>

   <footer >
      <p className='flex items-center text-[#AFAFAF] text-sm my-3'><Props desc='New to Netflix?'/><a className='text-white font-semibold hover:underline flex items-center text-base' href=""><Props link='Sign up now.'/></a></p>
      <p className='text-[#AFAFAF] text-sm'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <a href="" className='font-bold text-base text-[#2a3186] hover:underline'>Learn more.</a></p>
   </footer>
      </form>
     </section>
     <Footer />
    </>
  )
}

export default Signin