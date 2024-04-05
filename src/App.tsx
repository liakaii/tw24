import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login/login';
import Art from './pages/Pictures/Art';
import NotFound from './pages/404/NotFound';
import TechnicalWorkPage from './pages/TechnicalWorkPage';
import MoviesPage from './pages/Films/MoviesPage';
import ImageGeneratorPage from './pages/imgGEN/ImageGeneratorPage';
import { ImageProvider } from './ImageContext';

function App() {
  return (
    <Router>
      <ImageProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/Art" component={Art} />
          <Route path="/TechnicalWork" component={TechnicalWorkPage} />  
          <Route path="/Films" component={MoviesPage} />
          <Route path="/image-generator" component={ImageGeneratorPage} />
          <Route component={NotFound} />
        </Switch>
      </ImageProvider>
    </Router>
  );
}

export default App;
