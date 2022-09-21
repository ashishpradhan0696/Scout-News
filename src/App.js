
import './App.css';
import Home from "../src/pages/Home";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [Progress, setProgress] = useState(0);   //progress=0 initially
  return (
    <>
      <LoadingBar color='#f11946'
        progress={Progress} />
      <Router>
        <Routes>

          <Route exact path="/" element={<Home category="world" setProgress={setProgress} />} />
          <Route exact path="/business" element={<Home key="business" category="business" setProgress={setProgress} />} />
          <Route exact path="/entertainment" element={<Home key="entertainment" category="entertainment" setProgress={setProgress} />} />
          <Route exact path="/food" element={<Home key="food" category="food" setProgress={setProgress} />} />
          <Route exact path="/science" element={<Home key="science" category="science" setProgress={setProgress} />} />
          <Route exact path="/sport" element={<Home key="sport" category="sport" setProgress={setProgress} />} />
          <Route exact path="/tech" element={<Home key="tech" category="tech" setProgress={setProgress} />} />
          <Route exact path="/travel" element={<Home key="travel" category="travel" setProgress={setProgress} />} />
          <Route exact path="/music" element={<Home key="music" category="music" setProgress={setProgress} />} />
          <Route exact path="/beauty" element={<Home key="beauty" category="beauty" setProgress={setProgress} />} />
          <Route exact path="/finance" element={<Home key="finance" category="finance" setProgress={setProgress} />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
