import { Suspense } from 'react';

import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

import Loading from './loading-out';

const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favourite receipe and cook it yourself, It's
                    easy and fun!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share">
                        Share your favourite receipe
                    </Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<Loading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;
