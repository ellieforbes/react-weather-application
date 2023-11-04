
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather />
      <footer>
        This project was coded by {" "}
        <a href="https://portfolio-byellieforbes.netlify.app/" target="_blank" rel="noreferrer" >Ellie Forbes</a> and is {" "}
        <a href="https://github.com/ellieforbes/react-weather-application" target="_blank" rel="noreferrer" >open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
