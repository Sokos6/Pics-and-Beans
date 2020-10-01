import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import { ACCESS_KEY } from '../env';

class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
