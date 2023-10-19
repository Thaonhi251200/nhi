import logo from './logo.svg';
import go from './go.jpeg';

import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={go} className="hinh" />
      </header>
      <Header />
    </div>
  );
}

export default App;
