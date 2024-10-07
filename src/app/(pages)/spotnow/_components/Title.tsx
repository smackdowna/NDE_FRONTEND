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
      <div className='flex justify-center mt-6 mx-4'>
        <p className={`mx-auto ${descriptionWidth}`}>
             {description} 
        </p>
      </div>
    </div>
  )
}

export default Title