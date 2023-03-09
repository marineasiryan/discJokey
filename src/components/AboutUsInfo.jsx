import React from 'react'

const AboutUsInfo = ({title,description1,description2,description3,description4}) => {
  return (
    <div className='aboutUs_block'>
      <h2 className='heading_primary'>{title}</h2>
      <p className='text_primary text_primary--white'>{description1} </p> 
      <p className='text_primary text_primary--white'> {description2} </p> 
      <p className='text_primary text_primary--white'>{description3} </p>
      <p className='text_primary text_primary--white'>{description4} </p>
    </div>
  )
}

export default AboutUsInfo;