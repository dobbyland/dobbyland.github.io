import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      
      <header>

        <nav>
          <ul>
            <li>
              <Link to='/'>홈</Link>
            </li>
            <li>
              <Link to='/about'>어바웃</Link>
            </li>
          </ul>
        </nav>

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <footer>푸터</footer>
    </>
  );
}

export default App;