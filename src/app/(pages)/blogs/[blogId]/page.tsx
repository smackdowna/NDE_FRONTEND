import React from 'react'
import Hero from './_components/Hero'
import RecentBlog from './_components/RecentBlog'

const page = () => {
  return (
    <div className='max-width p-4 max-md:p-1'>
      <Hero />
      <div className='mt-[40px] px-8 ml-10 max-md:ml-0'>
        <span className='font-source-sans-pro font-900 text-[#5E18EB] text-3xl mt-10'>Recent Blog Posts</span>
      </div>
      <RecentBlog />
    </div>
  )
}

export default page