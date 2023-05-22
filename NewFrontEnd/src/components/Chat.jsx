import React from 'react'
import Messages from '../components/Messages'
import Input from '../components/Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='title'>Jane</div>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}

export default Chat