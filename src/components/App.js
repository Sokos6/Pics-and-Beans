import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-cpu';
class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    const img = this.state.image;
    const model = await mobilenet.load();
    const predictions = await model.classify(img);
    console.log(predictions);
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <div>Found: {this.state.images.length} Images</div>
      </div>
    );
  }
}

export default App;
