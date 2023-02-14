import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
