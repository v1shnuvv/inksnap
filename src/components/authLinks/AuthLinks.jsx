"use client"
import Link from 'next/link';
import styles from './authLinks.module.css'
import { useState } from 'react';

export default function AuthLinks(){
    const [open, setOpen] = useState(false)
    const status = "notauth";
    return (
      <>
        {status === "notvauth" ? (
          <Link href="/login" className={styles.link}>Login</Link>
        ) : (
          <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
        <div className={styles.burger} onClick={()=>{setOpen(!open)}}>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notvauth" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span>Logout</span>
          </>
        )}
        </div>
        )}
        
      </>
    );
}