import React from 'react'
import Props from '../Props'

function Footer() {
  return (
    <>
    <footer className='px-[11%] py-[5.5%] bg-black text-[#A7AFAF] w-full' >
        <div className=''>Questions? Call 000-800-919-1694</div>

        <ul className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3'>
            <li ><Props list='FAQ'/></li>
            <li ><Props list='Help Centre'/></li>
            <li ><Props list='Account'/></li>
            <li ><Props list='Media Centre'/></li>
            <li ><Props list='Investor Relations'/></li>
            <li ><Props list='Jobs'/></li>
            <li ><Props list='Ways to Watch'/></li>
            <li ><Props list='Terms of Use'/></li>
            <li ><Props list='Privacy'/></li>
            <li ><Props list='Cookie Preferences'/></li>
            <li ><Props list='Corporate Information'/></li>
            <li ><Props list='Contact Us'/></li>
            <li ><Props list='Speed Test'/></li>
            <li ><Props list='Legal Notices'/></li>
            <li ><Props list='Only on Netflix'/></li>
        </ul>

        <select name="language" id="language" className='bg-transparent  my-4 w-32 border-[1px] flex flex-col items-center border-gray-600 rounded-md h-8 px-2 '>
            <option className='bg-transparent text-black' value="english">English</option>
            <option className='bg-transparent text-black' value="hindi">Hindi</option>
          </select>
          <div>Netflix India</div>

    </footer>
    </>
  )
}

export default Footer