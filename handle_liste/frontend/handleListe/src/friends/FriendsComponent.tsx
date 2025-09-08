import React, { useState } from 'react'

import '../App.sass'

function FriendsComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='FriendsSection'>
        <div>
          <label htmlFor="friends">Friends</label>
          <div>
            <img src="#" alt="profile picture"/> <div>Olsen</div> <button>Delete</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default FriendsComponent
