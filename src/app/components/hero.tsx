import React from 'react'
import Image from 'next/image'
import Button from './button'


const Hero = () => { 
  return (
    <div>
        <h1 className='text-bolder text-left py-20 px-5 text-3xl'>Welcome to my first figma website</h1>
       <div className='flex '>
        <p className=' px-5 mr-34 text-left '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, fugiat nihil eos itaque quam voluptates, doloribus omnis in quisquam rerum similique! Fugit commodi enim tempore reprehenderit id pariatur consequatur eaque.
        </p>
        <div className="flex mr-32 ml-6 px-5 ">
          <Image src="/leaf.jpeg" height={300} width={800} alt='aBeautifulLeaf' />
        </div>
        
        </div>
        </div>
    

    
  )
}

export default Hero