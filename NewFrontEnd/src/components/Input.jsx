import React from 'react'
import Upload from '../img/upload.png'


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Say something...' />
      <div className='send'>
        <input type="file" id='file' style={{display:'none'}}/>
        <label htmlFor='file'>
          <img src={Upload} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input