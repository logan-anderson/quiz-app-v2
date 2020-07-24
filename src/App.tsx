import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';
import Home from './Home';

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider
        // @ts-ignore
        value={themeHook}
      >
        <div className="container mx-auto">
          <header>
            <nav className="flex flex-wrap items-center justify-between p-4">
              <div className="order-2 w-1/5 text-center">
                <a className="text-xl text-indigo-500 font-semibold" href="#">
                  Jeopardy
                </a>
              </div>
              <div className="navbar-menu  order-1 block w-2/5"></div>
              <div className="navbar-menu  order-3 block w-2/5 text-right"></div>
            </nav>
          </header>
          <Home />
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
