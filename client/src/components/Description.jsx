import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt=" "className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Turn your imagination into reality with our free AI image generator. Simply describe what you envision, and our powerful tool will create stunning visuals in seconds. It's fast, easy, and perfect for bringing your creative ideas to life.</p>
                <p className='text-gray-600 mb-4'>Just enter a text prompt, and our advanced AI instantly turns your words into stunning, high-quality images! Whether it’s product designs, characters, landscapes, or entirely new concepts, you can visualize anything in seconds. Let your creativity run wild—no design skills needed!</p>

            </div>
        </div>
    
    </div>
  )
}

export default Description