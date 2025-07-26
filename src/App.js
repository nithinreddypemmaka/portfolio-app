import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <Footer />
    </div>
  );
}

export default App;
