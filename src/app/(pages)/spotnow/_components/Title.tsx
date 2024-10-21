import React from 'react'
import './style.css'

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
          <h2 className={`mx-auto ${titleWidth} text-[#000659]`}>
            {title}
        </h2>
      </div>
      <div className='flex justify-center md:mt-4 mt-2 mx-4'>
        <p className={`mx-auto ${descriptionWidth} text-home-body`} style={{lineHeight: 1.65}}>
             {description} 
        </p>
      </div>
    </div>
  )
}

export default Title