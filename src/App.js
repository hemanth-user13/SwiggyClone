import "./App.css";
import Clone from './Main';
import Search from "./Components/Header/Searchitems";
import Offers from './Components/Header/Offers'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clone />} />
          <Route path="/search" element={<Search />} />
          <Route path="/offers" element={<Offers />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
