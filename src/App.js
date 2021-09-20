
import './App.css';
import Foods from './components/Foods/Foods';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Foods search<sub>made using React.js</sub></h1>
      <div className="searchArea">
        <input type="text" placeholder="type food name" id="searchField" />
        <input type="button" value="Search" id="searchButton" />
      </div>
      <div><Foods></Foods></div>

    </div>
  );
}

export default App;
