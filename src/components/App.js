import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import { ACCESS_KEY } from '../env';

class App extends Component {
  onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization:
            `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    // console.log(ACCESS_KEY);
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
