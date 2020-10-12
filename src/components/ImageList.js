import React from 'react';
import './ImageList.css';

const ImageList = (props) => {

  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={alt_description}/>

  })


  return <div className='image-list'>{images}</div>;
};

export default ImageList;
