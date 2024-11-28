import React from 'react'
import styles from './navbar.module.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  let navigate = useNavigate()
  const signOut =()=>{
    localStorage.removeItem('tokenTest')
    navigate('/login')
  }
  return (
    <div className={styles.navbar} >
        <button className={styles.goToWebsite} onClick={()=> navigate('/')} >Go To Website</button>
        <div className={styles.setting} >
            <i className='fa fa-bell' ></i>
            <i className='fa fa-envelope' ></i>
            <i onClick={signOut} className='fa fa-sign-out' ></i>
        </div>
    </div>
  )
}
