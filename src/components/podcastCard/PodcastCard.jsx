import React from 'react'

const PodcastCard = ({textTop,image,textBottom,title}) => {
  return (
    <div className='podcastCard'>
      <p className='text_primary text_primary--gray'>{textTop}</p>
       <div className='podcastCard_img'>
     <img src={image}/>

       </div>
      <p className='text_primary text_primary--gray'>{textBottom}</p>
      <h2 className='heading_secondary'>{title}</h2>

    </div>
  )
}

export default PodcastCard