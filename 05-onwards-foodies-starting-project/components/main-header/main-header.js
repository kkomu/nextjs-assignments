import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';

import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={logoImage}
                        alt="A plate with food on it"
                        priority
                    />
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
        </>
    );
};

export default MainHeader;
