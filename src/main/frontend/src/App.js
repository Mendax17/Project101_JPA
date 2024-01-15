import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main, Test, Navi } from './pages/page';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Test />} />
          <Route path="/navi" element={<Navi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;