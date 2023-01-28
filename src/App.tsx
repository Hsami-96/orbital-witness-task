import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TitlesPage from './pages/Titles';
import TitleDetailsPage from './pages/TitleDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitlesPage />} />
        <Route path="/title/:number" element={<TitleDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
