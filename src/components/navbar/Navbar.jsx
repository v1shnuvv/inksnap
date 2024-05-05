import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

export default function Navbar() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src="/linkedinLogo.png" alt="LinkedIn Logo" width={24} height={24}/>
      </div> */}
      <div className={styles.logo}>INKSNAP</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="./" className={styles.link}>HomePage</Link>
        <Link href="./" className={styles.link}>Contact</Link>
        <Link href="./" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}