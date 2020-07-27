import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Service from './components/service';
import Testimonials from './components/testimonials';
import Statistics from './components/statistics';
import References from './components/references';
import Customers from './components/customers';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Service></Service>
      <Testimonials></Testimonials>
      <Statistics></Statistics>
      <References></References>
      <Customers></Customers>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
