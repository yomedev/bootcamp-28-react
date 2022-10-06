import React from 'react'
import image from './image.jpeg'

const BannerModal = () => {
  return (
    <>
    <marquee scrollamount="20" behavior="scroll" direction="left" className="sale">
      SALE - SALE - SALE - SALE - SALE - SALE - SALE - SALE
    </marquee>
    <img src={image} alt="banner" className="w-100" />
    </>
  )
}

export default BannerModal