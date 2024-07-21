const MealPage = ({ params }) => {
  return (
    <main>
      <h1>A meal</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default MealPage;
