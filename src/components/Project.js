import React from 'react'
const techs=['React-Native','tailwindcss','expo','firebase','nodejs']
export default function Project() {
  return (
    <div className='font-inter bg-slateblue items-center  flex flex-col lg:flex-row-reverse  p-2 justify-center space-x-10 mb-4'>
         <div className='flex items-center justify-center'>
            <img className='lg:w-[40%] w-[60%] rounded-lg ' src='./or.png'/>
        </div>
        <div className='font-bold text-white p-2 w-[60%]'>
            <h1 className='text-[12px] text-center lg:text-start lg:text-[20px]'>
                PyyplShop currency transfer mobile application
            </h1>
            <p className='text-[8px] lg:text-[12px] text-gray-300'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
            </p>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-2  '>
                {techs.map((tech,i)=>(
                    <h6 className='bg-slate-900  rounded-full p-2 text-center flex items-center justify-center'>{tech}</h6>
                ))}
            </div>
        </div>
       
    </div>
  )
}
