import React from 'react'

interface TitleProps {
    title: string;
    description: string;
    descriptionWidth?: string;
    titleWidth?: string;
  }

const Title: React.FC<TitleProps> = ({ title, description, descriptionWidth, titleWidth}) => {
  return (
    <div>
         <div className='flex justify-center'>
          <span className={`text-6xl max-md:mx-4 max-xl:text-4xl max-md:text-[26px] font-900 text-home-heading font-roboto text-center max-lg:text-[43px] max-lg:leading-tight max-2xl:leading-tight 2xl:text-[64px] max-2xl:text-[43px] max-w-[310px] md:max-w-[777px] 3xl:max-w-[1112px] mx-auto ${titleWidth}`}>
            {title}
        </span>
      </div>
      <div className='flex justify-center mt-6 mx-4'>
        <p className={`max-w-[330px] md:max-w-[776px] 3xl:max-w-[1132px] mx-auto ${descriptionWidth}`}>
             {description} 
        </p>
      </div>
    </div>
  )
}

export default Title