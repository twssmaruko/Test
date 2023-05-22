import React from 'react'
import Car from '../img/car.jpg'

const Message = () => {
  return (
    <div className='message self'>
        <div className="messageInfo">
            <img src="https://hips.hearstapps.com/hmg-prod/images/michael-jordan.jpg" alt="" />
            <span>3 min ago</span>
        </div>
        <div className="messageContent">
            <p>This is a message from MJ? How are you bro. Miss you so much!</p>
            <img src={Car} alt="" />
        </div>
    </div>
  )
}

export default Message