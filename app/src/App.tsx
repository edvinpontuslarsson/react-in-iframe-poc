import "./App.css";

export default function App() {
  const numbers = [];

  for (let x = 1; x <= 50; x++) {
    numbers.push(x);
  }

  return (
    <div className="App">
      {numbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
}
