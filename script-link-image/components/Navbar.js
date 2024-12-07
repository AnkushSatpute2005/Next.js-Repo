import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-slate-600 text-white flex justify-between p-2'>
        <h1>Facebook</h1>
      <ul className='flex gap-2 '>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
