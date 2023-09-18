import React from 'react'

export default function Project({project}) {
  return (
    <div className='font-inter bg-slateblue items-center  flex flex-col lg:flex-row-reverse  p-2 justify-center space-x-10 mb-4'>
         <div className='flex items-center justify-center'>
            <img className='lg:w-[40%] w-[60%] rounded-lg ' src={project.image}/>
        </div>
        <div className='font-bold text-white p-2 w-[60%]'>
            <h1 className='text-[12px] text-center lg:text-start lg:text-[20px]'>
                {project.title}
            </h1>
            <p className='text-[8px] lg:text-[12px] text-gray-300'>
                {project.des}
            </p>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-2  '>
                {project.techs.map((tech,i)=>(
                    <h6 className='bg-slate-900  rounded-full p-2 text-center flex items-center justify-center'>{tech}</h6>
                ))}
            </div>
            <div className='flex flex-row space-x-5'>
                    <a href={project.demo} className='no-underline text-black ' target='_blank'>demo</a>
                    <a href={project.code}  className='no-underline text-black ' target='_blank'>code</a>

            </div>
        </div>
       
    </div>
  )
}
