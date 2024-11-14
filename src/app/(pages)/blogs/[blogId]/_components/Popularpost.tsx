import React from 'react'

const Popularpost = () => {
  return (
    <div className='mt-4 max-lg:m-4'>
        <div className=' flex flex-col gap-3 border  w-[400px] max-lg:w-full h-[400px] max-lg:h-full  p-4'>
            <span className=' font-source-sans-pro font-900'>POPULAR POSTS</span>
            <div className='p-3 px-6 bg-[#EBEFFF] rounded-sm max-lg:pr-[300px] max-md:pr-0'>
                <span>Customer journey optimization explained simply</span>
            </div>
            <div className='p-3 px-6 bg-[#EBEFFF] rounded-sm max-lg:pr-[300px] max-md:pr-0'>
                <span>Customer journey optimization explained simply</span>
            </div>
            <div className='p-3 px-6 bg-[#EBEFFF] rounded-sm max-lg:pr-[300px] max-md:pr-0'>
                <span>Customer journey optimization explained simply</span>
            </div>
            <div className='p-3 px-6 bg-[#EBEFFF] rounded-sm max-lg:pr-[300px]  max-md:pr-0'>
                <span>Customer journey optimization explained simply</span>
            </div>
        </div>
    </div>
  )
}

export default Popularpost