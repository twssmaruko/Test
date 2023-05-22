import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import Add from '../img/icon-registration.png';
import moment from 'moment';
import type { DatePickerProps } from 'antd';
import { DatePicker, message } from 'antd';
import { useNavigate } from "react-router-dom";
import * as actions from '../store/users/index';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Register = () => {

  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('9x1923921ajsdkw')
  const [birthday, setBirthday] = useState('')
  const [invalidUserName, setInvalidUserName] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(".png")

  const {load, usrs} = useSelector(({users}) => ({
    load: users.loading,
    usrs: users.users
  }), shallowEqual);

  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const userNameCheck = () => {
    for (const key in usrs) {
      if(userName === usrs[key].username){
        message.error("Username already taken!")
      }
    }
  }

  const emailCheck = () => {
    for (const key in usrs) {
      if(email === usrs[key].email) {
        message.error("Email already in use!")
      }
    }
  }


  useEffect(() => {
    userNameCheck()
    emailCheck()
  }, [userName, email])

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setBirthday(dateString)
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const selectFile = (data) => {
    if(data.type === 'image/png') {
        setFileType('.png')
    } else if (data.type === 'image/jpeg'){
        setFileType('.jpg')
    }
    const blob = data.slice(0, data.size, data.type);
    const newFile = new File([blob], userName + fileType, {type: fileType});
    console.log(newFile)
    setSelectedFile(newFile)
}

  const userNameChange = (data) => {
    
  }

  const handleSubmit = async(data) => {
    data.preventDefault()

    const toSend = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    }
    try {
      await dispatcher(actions.createUser(toSend))
      navigate("/")
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
      <Spin indicator={antIcon} spinning={load}/>
        <span className="logo"> AIMSBConnect</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input id="userName" name="userName" type="text" placeholder='User Name' onChange={(e) => 
            { setUserName(e.target.value)
            userNameCheck() }} />
          <input name="firstName" type="text" placeholder='First Name' onChange={(e) => { setFirstName(e.target.value) }} />
          <input name="lastName" type="text" placeholder='Last Name' onChange={(e) => { setLastName(e.target.value) }}/>
          <input name="email" type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
          <input name="password" type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}/>
          <input name="confirmPassword" type="password" placeholder='Confirm Password' onChange={(e) => { setConfirmPassword(e.target.value) }}/>
          <DatePicker name="birthday" placeholder="Birthday" onChange={onChange} />
          <input name="profilePic" type="file" id='file' style={{ display: "none" }} />
          <label htmlFor="file">
          </label>
          <button>Register</button>
        </form>
        <p>Already have an account? <button onClick = {() => {navigate("/")}}>Login</button></p>
      </div>
    </div>
  )
}

export default Register;