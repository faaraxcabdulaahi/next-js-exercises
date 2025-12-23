export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div>
      <h1>Thi is about us</h1>
      <p>This is a static about us page.</p>
      <p>Content written: {Date.now()}</p>
    </div>
  );
}