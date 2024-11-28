import React, { useState } from 'react'
import logo from '../../../assets/brands/logo-search-grid-1x.png'
import styles from './layout.module.css'
import MyCart from '../products/MyCart'

export default function Navbar({onLoginClick}) {
    const [activeLink, setActiveLink] = useState('');
    const [open, setOpen] = useState(false)
    const links = [
        {
            id: 1,
            name: "Home",
            url: ""
        },
        {
            id: 2,
            name: "Our Products",
            url: "ourProducts"

        },
        {
            id: 3,
            name: "About Us",
            url: "aboutUs"
        },
        {
            id: 4,
            name: "My Cart",
            url: "my-cart"
        }
    ]

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <div className={` ${styles.navbar} d-flex items-center justify-between `}>
                <img className={styles.logo} src={logo} />
                <div className={` ${styles.links} d-flex items-center`}>
                    {
                        links.map((link) => (
                            <div onClick={() => {
                                if (link.url === 'my-cart') {
                                    console.log('kkkk')
                                    setOpen(true)
                                } else {
                                    handleLinkClick(link.url)
                                }

                            }}>
                                <div className='d-flex items-center gap-10' >
                                    <span className={activeLink === link.url ? styles.activeLink : styles.spanLink}>{link.name}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <span onClick={onLoginClick} className={styles.btnAdminLog} >Login as admin</span>
            </div>
            {
                open && (
                    <MyCart open={open} setOpen={setOpen} />
                )
            }
        </>
    );
}