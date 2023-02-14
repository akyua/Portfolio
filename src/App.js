import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
