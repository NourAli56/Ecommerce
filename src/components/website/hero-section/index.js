import React from 'react'
import styles from './heroSection.module.css'

export default function HeroSection() {
  return (
    <div className={`${styles.cover} relative`} >
        <div className={styles.content} >
            <p className={styles.title} >Ecommerce</p>
            <p className={styles.description} >Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.</p>
        </div>
    </div>
  )
}