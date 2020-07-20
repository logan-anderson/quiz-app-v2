import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';
import Home from './Home'

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
              <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                <Link to="/quiz-app-v2" className="text-xl text-indigo-500 font-semibold" href="#">Dunder Mifflin</Link>
              </div>
              <div className="block lg:hidden">
                <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5"><a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Products</a><a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Team</a><a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700" href="#">Customers</a></div>
              <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right"><a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Blog</a><a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">FAQ</a><a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700" href="#">Contact</a></div>
            </nav>
          </header>
          <Router basepath='/quiz-app-v2'>
            <Home
              // @ts-ignore
              path="/"
            />
            {/* <Details path="/details/:id" /> */}
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode >
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
