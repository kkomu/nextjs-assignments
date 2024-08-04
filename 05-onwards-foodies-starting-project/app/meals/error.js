'use client';
const MealsErrorPage = ({ error }) => {
    return (
        <main className="error">
            <h1>Oh no</h1>
            <p>Failed to fetch meal data. Please try again later</p>
        </main>
    );
};

export default MealsErrorPage;
