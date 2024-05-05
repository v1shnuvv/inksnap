"use client"
import Image from 'next/image'
import styles from './themeToggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle(){
    const {theme, toggle} = useContext(ThemeContext);
    return(
        <div className={styles.container} onClick={toggle} style={theme === "dark" ? {background: "white" } : {background: "#0f172a"}}>
            <Image src="/moon.png" alt='moon' width={14} height={14}/>
            <div className={styles.circle} style={theme === "dark" ? {left:1,background: "#0f172a" } : {right: 1, background: "white"}}></div>
            <Image src="/sun.png" alt='moon' width={14} height={14}/>
        </div>
    )
}