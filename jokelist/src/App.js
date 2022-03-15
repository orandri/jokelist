import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoris from './pages/Favoris';



const App = () => {
  const url = "https://geek-jokes.sameerkumar.website/api?format=json";
fetch(url).then(res => res.json).then((data) => {console.log(data)});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Favoris" element={<Favoris/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
