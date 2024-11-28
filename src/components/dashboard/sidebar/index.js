import React from 'react'
import styles from './sidebar.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../assets/brands/logo.png'

export default function Sidebar() {
    let navigat = useNavigate()
    const location = useLocation();
  return (
    <div className={styles.sidebar} >
        <div className={styles.innerSidebar} >
            <img className={styles.logo} src={logo} />
            <br></br>
            <div onClick={()=>navigat('/dashboard')} className={`${styles.oneChoice} ${location.pathname=='/dashboard'&& styles.active}`} >
                <i className='fa fa-pie-chart' ></i>
                <span>Home</span>
            </div>
            <div onClick={()=>navigat('/add-product')} className={`${styles.oneChoice} ${location.pathname=='/add-product'&& styles.active}`}>
                <i className='fa fa-list' ></i>
                <span>Add Product</span>
            </div>
            <div onClick={()=>navigat('/products')} className={`${styles.oneChoice} ${location.pathname=='/products'&& styles.active}`}>
                <i className='fa fa-list' ></i>
                <span>Products</span>
            </div>
        </div>
    </div>
  )
}
