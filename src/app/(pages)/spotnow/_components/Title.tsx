import React from 'react'

interface TitleProps {
    title: string;
    description: string;
    descriptionWidth: string;
    titleWidth: string;
  }

const Title: React.FC<TitleProps> = ({ title, description, descriptionWidth, titleWidth}) => {
  return (
    <div>
         <div className='flex justify-center'>
        <span className={`text-6xl max-md:mx-4 max-xl:text-4xl max-md:text-[26px] font-900 text-home-heading font-roboto text-center max-lg:text-[43px] max-lg:leading-tight max-2xl:leading-tight 2xl:text-[64px] max-2xl:text-[43px] ${titleWidth}`}>
            {title}
        </span>
      </div>
      <div className='flex justify-center pt-8 mx-4'>
        <span className={` text-center w-full font-400 font-roboto-serif text-3xl max-md:text-lg max-xl:w-full max-md:px-4  max-2xl:text-[17px] 2xl:text-[22px]  max-2xl:leading-normal ${descriptionWidth}`}>
             {description} 
        </span>
      </div>
    </div>
  )
}

export default Title