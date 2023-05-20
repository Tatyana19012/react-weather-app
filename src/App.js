import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Tetiana Chychyka and is{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Tatyana19012/react-weather-app"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
