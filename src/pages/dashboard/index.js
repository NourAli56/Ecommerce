import React from 'react'
import welcome from '../../assets/Images/welcome-back.png'

export default function Dashboard() {
  return (
      <main>
        <div style={{width: "100%",height: "450px"}} className='d-flex items-center justify-center' >
       <img src={welcome} />
       </div>
      </main>
  )
}
