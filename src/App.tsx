import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login/login';
import AppBarComponent from './components/ApppBar';
import Art from './pages/Pictures/Art';
import NotFound from './pages/404/NotFound';
import TechnicalWorkPage from './pages/TechnicalWorkPage';
import MoviesPage from './pages/Films/MoviesPage';
import ImageGeneratorPage from './pages/imgGEN/ImageGeneratorPage';
import { ImageProvider } from './ImageContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState<{ avatar: string } | null>(null);

  return (
    <Router>
      <ImageProvider>
        <AppBarComponent setUser={setUser} user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" render={() => <LoginPage setUser={setUser} />} />
          <Route path="/Art" component={Art} />
          <Route path="/TechnicalWork" component={TechnicalWorkPage} />
          <Route path="/Films" component={MoviesPage} />
          <Route path="/image-generator" component={ImageGeneratorPage} /> {/* Добавлен маршрут для ImageGeneratorPage */}
          <Route component={NotFound} />
        </Switch>
      </ImageProvider>
    </Router>
  );
}

export default App;
