// Create our image list component

// Import React library
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'Pen', link: 'http://dummyimage.com/600x400'},
  {title: 'Pine Tree', link: 'http://dummyimage.com/600x400'},
  {title: 'Mug', link: 'http://dummyimage.com/600x400'}
];


// Create our component
const ImageList = () => {
  return (
    <ul>
      <ImageDetail />
    </ul>
  );
};

// Export our component
export default ImageList;