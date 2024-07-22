import Link from 'next/link';
import logoImage from '@/assets/logo.png';

const MainHeader = () => {
  return (
    <header>
      <Link href='/'>
        <img src={logoImage.src} alt='A plate with food on it' />
        <span>Next level food</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
