
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login/login';
import Art from './pages/Pictures/Art';
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Art" component={Art} />
        <Route component={NotFound} />  {/* Маршрут для 404 страницы */}
      </Switch>
    </Router>
  );
}

export default App;