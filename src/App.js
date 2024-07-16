import "./App.css";

function App() {
  const myName = "Diana";
  const num1 = 9;
  const num2 = 1;
  const sum = num1 + num2;
  const colors = ["Чорний", "Червоний", "Білий"];
  const favoriteWebsite = {
    name: "Youtube",
    url: "https://www.youtube.com/",
  };
  return (
    <div>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vHYjHhrB5lAx7KnOgTmJLSvqSgBq9j0r-Q&s"
        alt="Youtube"
      />
      <a href={favoriteWebsite.url}>{favoriteWebsite.name}</a>
      <p>Сума чисел 9 + 1 = {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
