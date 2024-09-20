import React from 'react'
import Props from './Props'

import {  BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Signin from './Pages/Signin'
import Hero from './Pages/Hero'

function App() {
  return (
   <>
 <Router>
      <section  style={{backgroundImage:`url('bg.jp')`}} className='bg-black'>

       <div className='flex justify-between items-center px-[11%] py-6 md:px-[8%] sm:px-[5%]'>
       <Link to='/'><div className='w-40 flex items-center md:w-32 sm:w-24'>
       <Props url='logo.png' />
        </div></Link>

        <div className='flex items-center text-white'>
          <select name="language" id="language" className='bg-transparent mr-3 w-32 border-[1px] flex flex-col items-center border-gray-600 rounded-md h-8 px-2 md:w-28 sm:w-24'>
            <option className='bg-transparent text-black' value="english">English</option>
            <option className='bg-transparent text-black' value="hindi">Hindi</option>
          </select>
         
          <Link to='/ signin'>  <a href='#signin' className='flex items-center bg-[#C71018] h-8 w-20 justify-center rounded-md sm:w-16'>
        <Props btn='Sign in'/>
         </a></Link>

       

        </div>
       </div>


      
      </section>
          
      <Routes>
        <Route path='/' element={<Hero />}></Route>
      <Route path='/ signin' element={<Signin />}></Route>

      </Routes>
      </Router>
      
   </>
  )
}

export default App