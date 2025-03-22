import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
// import Counter from './Counter';
// import TitleChanger from './TitleChanger';
import RequestToServer from './RequestToServer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
            <b>Saltan</b>
        </p>
        <Hello name="Saltan" prop="Jake"/>
        <Hello name="Андрей" prop="Finn"/>
        <Counter /> */}
        <RequestToServer/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
