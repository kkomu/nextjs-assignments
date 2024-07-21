export default function BlogPostPage({ params }) {
  console.log("params", params);
  return (
    <main>
      <h1>Blog post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
