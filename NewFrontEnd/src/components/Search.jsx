import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search friend'/>

      </div>
      <div className="userChat">
        <img src="https://hips.hearstapps.com/hmg-prod/images/michael-jordan.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search