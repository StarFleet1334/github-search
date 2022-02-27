import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import Search from './components/Search'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='page-container'>
        <div className='content-wrap'>
          <Navbar />
          <Search />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
