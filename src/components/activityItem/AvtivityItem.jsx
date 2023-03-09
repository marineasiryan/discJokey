import React from 'react'

const AvtivityItem = ({text}) => {
  return (
    <div className='itemActivity'>
        <img src='http://design4dj.com/tf/ultravibes/dark/images/uv_small_logo.png'/>
        <p className='heading_secondary'>{text}</p>
    </div>
  )
}

export default AvtivityItem