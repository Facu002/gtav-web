import Home from "./Home";
import Nav from './Components/Nav'
import GtaOnlineHome from "./GtaOnlineHome";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/online" element={<GtaOnlineHome/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
