import React from 'react'
import './Status.css'
import Profile from '../../assets/images/profile.svg'
import Image4 from '../../assets/images/image4.svg'
import Image5 from '../../assets/images/image5.svg'
import Image1 from '../../assets/images/image1.svg'
import Image2 from '../../assets/images/image2.svg'
import Image3 from '../../assets/images/image3.svg'





const Status = () => {
  return (
    <div className='status'>
      <div className="status-img">
        <a href=""><img src={Profile} alt="" className='pic' /> <p>Your story</p></a>

        <a href=""><img src={Image4} alt="" className='pic' /><p>Morufat</p></a>

        <a href=""><img src={Image5} alt="" className='pic' /><p>Mathew</p></a>

        <a href=""><img src={Image1} alt="" className='pic' /><p>Zaynab</p></a>

        <a href=""><img src={Image2} alt="" className='pic' /><p>Goodness</p></a>

        <a href=""><img src={Image3} alt="" className='pic' /><p>Efe</p></a>
      </div>
    </div>
  )
}

export default Status