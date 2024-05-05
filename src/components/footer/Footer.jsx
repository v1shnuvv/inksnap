import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image className={styles.image} alt='logo' src="/godfather.jpg" width={50} height={50}></Image>
                    <h1>Ink Snap</h1>
                </div>
                <p className={styles.description}>
                In most cases, you are likely to take many photos during your trip, some of which you can add to your travel journal. Therefore, use your phone to take numerous pictures and carry alongside your phone an HP Sprocket, which is a portable printer. This machine might be smaller than your phone. And it prints wireless from whichever phone you are using.
                </p>
                <div className={styles.icons}>
                    <Image src="/linkedinLogo.png" alt="LinkedIn Logo" width={24} height={24}/>
                    <Image src="/linkedinLogo.png" alt="LinkedIn Logo" width={24} height={24}/>
                </div>
            </div>
        </div>
    )
}