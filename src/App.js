import React from 'react';
import Search from './components/Search';
import DomainData from './components/DomainData';
import './App.css';
import DomainsDemo from './components/DomainsDemo';

const App = () => {

  return (
    <div>
      <header className="main-header">
        <Search />
      </header>
      <section className="main-section">
        <DomainData />
      </section>
    </div>
  );
};

export default App;
