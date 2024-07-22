import Link from 'next/link'
import logoImage from '@/assets/logo.png'

import styles from './main-header.module.css'

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src={logoImage.src} alt="A plate with food on it" />
                <span>Next level food</span>
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
