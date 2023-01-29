import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import TitleDetailsPage from './pages/TitleDetails';
import TitlesPage from './pages/Titles';
function App() {
  return (
      <Routes>
        <Route path="/" element={<TitlesPage />} />
        <Route path="/title/:titleNumber" element={<TitleDetailsPage />} />
      </Routes>
  );
}

export default App;
