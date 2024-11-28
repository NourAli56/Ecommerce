import React from 'react'
import styles from './titles.module.css'

export default function Titles({colorTitle, title }) {
    return (
        <div>
            <div className={styles.titleTop}></div>
            <span style={{color: colorTitle ? colorTitle : "#222222"}}  className={styles.title}>{title}</span>
            <div className={styles.titleBottom}></div>
        </div>
    )
}
