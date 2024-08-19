import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

class App extends Component {
  state = {
    selectedCountry: 'India',
    selectedCategory: 'technology',
  };

  handleCountryChange = (country) => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const { selectedCountry } = this.state;

    return (
      <Router>
        <Navbar 
          onCountryChange={this.handleCountryChange} 
          selectedCountry={selectedCountry}
        />
        <Routes>
          <Route path="/" element={<News pageSize={18} country={selectedCountry} category="technology" />} />
          <Route path="/technology" element={<News pageSize={18} country={selectedCountry} category="technology" />} />
          <Route path="/business" element={<News pageSize={18} country={selectedCountry} category="business" />} />
          <Route path="/science" element={<News pageSize={18} country={selectedCountry} category="science" />} />
          <Route path="/sport" element={<News pageSize={18} country={selectedCountry} category="sport" />} />
          <Route path="/culture" element={<News pageSize={18} country={selectedCountry} category="culture" />} />
          <Route path="/lifestyle" element={<News pageSize={18} country={selectedCountry} category="lifeandstyle" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
