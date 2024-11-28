import React from 'react'
import call from '../../../assets/Icons/call.svg'
import sms from '../../../assets/Icons/sms.svg'
import styles from './layout.module.css'
import { Link } from 'react-router-dom'

export default function
    () {
    return (
        <div className={`${styles.footer} d-flex items-start gap-10`} >
            <div className={styles.oneBox} >
                <p className={styles.titleFooter} >About Us</p>
                <p className={styles.aboutFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <br></br>
                <div className='d-flex items-center gap-10'>
                    <img src={call} />
                    <span className='text-white'>0933289353</span>
                </div>
                <br></br>
                <div className='d-flex items-center gap-10'>
                    <img src={sms} />
                    <span className='text-white' >test@gmail.com</span>
                </div>
            </div>
            <div className={styles.oneBox}>
                <p className={styles.titleFooter} >Quick Links</p>
                <div className={styles.linksFooter} >
                    <Link to='/' >Home</Link>
                    <Link to='/' >Our Products</Link>
                    <Link to='/' >About Us</Link>
                    <Link to='/' >Contact Us</Link>
                </div>
            </div>
            <div className={styles.oneBox}>
                <p className={styles.titleFooter} >Our Products</p>
                <div className={styles.linksFooter} >
                    <span>Red Lipstick</span>
                    <span>Dior J'adore</span>
                    <span>Beef Steak</span>
                    <span>Cat Food</span>
                    <span>Chicken Meat</span>
                </div>
            </div>
            <div className={styles.oneBox} >
                <p className={styles.titleFooter} >Keep In Touch</p>
                <p className={styles.aboutFooter}>Subscribe to our website to get products that meet the needs of every home. </p>
                <br></br>
                <div className='d-flex items-center gap-10' >
                    <input className={styles.inputFooter} placeholder='Your Email' />
                    <button className={styles.buttonFooter} >Subscribe</button>
                </div>
            </div>
        </div>
    )
}