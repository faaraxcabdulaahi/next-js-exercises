export default function AboutPage() {
  const data = new Date().toLocaleString();
  
  return (
    <div>
      <h1>This is about us</h1>
      <p>Current server time: {data}</p>
    </div>
  );
}