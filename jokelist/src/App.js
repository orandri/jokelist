import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Favoris from './pages/Favoris';
import Accueil from './pages/Accueil';

// const url = "https://geek-jokes.sameerkumar.website/api?format=json";
// fetch(url).then(res => res.json()).then(data => {console.log(data)});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Favoris" element={<Favoris/>} />
        <Route path="/" element={<Accueil/>} />
        {/* Si la route ne marche pas alors prendre path="* " */}
        <Route path="*" element={<Accueil/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
