import logo from './logo1.svg';
import './App.css';
// import Hello from './Hello';
// import Counter from './Counter';
// import TitleChanger from './TitleChanger';
//import RequestToServer from './RequestToServer';
import StringSearch from './stringSearch';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='HeaderLogo'>
          <img src={logo} className="App-logo" alt="logo" />
          My Mad NoteBook
        </div>
        {/* <p>
            <b>Saltan</b>
        </p>
        <Hello name="Saltan" prop="Jake"/>
        <Hello name="Андрей" prop="Finn"/>
        <Counter /> */}
        
      </header>
      <StringSearch/>
    </div>
  );
}

export default App;
