import React from 'react'
// import Fighter from '../assets/Fighter.jpg'
const Banner = () => {
    
  return (
    <div  className='relative h-[20vh] md:h-[70vh] bg-cover bg-center'> 
    <img className='h-full w-full' src={`https://images.moneycontrol.com/static-mcnews/2024/06/20240619074723_Untitled-design.png`}></img>
          <div className='absolute bottom-0  left-0 w-full text-center text-white text-2xl  bg-black bg-opacity-50 py-2 '>
          Ishq Vishk Rebound
      </div>
    </div>
     
    
  )
}

export default Banner
