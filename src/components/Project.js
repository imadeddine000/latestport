import React from 'react'

export default function Project({project}) {
  return (
    <div className='font-inter bg-slateblue   flex flex-col sm:flex-row-reverse md:items-center p-2  space-x-10 mb-4'>
         <div className='flex items-center justify-center'>
            <img className='md:w-[60%] sm:w-[40%] w-[80%] rounded-lg ' src={project.image}/>
        </div>
        <div className='font-bold p-2 text-white  sm:w-[60%] relative'>
            <h1 className='text-[20px]  text-start sm:text-[14px] md:text-[25px] lg:text-[30px]'>
                {project.title}
            </h1>
            <p className='text-[8px]  text-start sm:text-[8px] text-gray-300'>
                {project.des}
            </p>
            <div className='space-x-1'>
            {project.techs.map((tech,i)=>(
                <span className='font-regular text-[10px]  text-white bg-slate-900 rounded-full p-1 px-2'>{tech}</span>
            ))}
        </div>
            <div className='flex flex-row space-x-5 m-2'>
                    <a href={project.demo} className='no-underline text-black hover:text-slate-800 cursor-pointer  ' target='_blank'>demo</a>
                    <a href={project.code}  className='no-underline text-black hover:text-slate-800 cursor-pointer ' target='_blank'>code</a>

            </div>
           
        </div>
        
    </div>
  )
}
