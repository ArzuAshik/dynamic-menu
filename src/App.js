import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
    </Router>
  );
}

export default App;
