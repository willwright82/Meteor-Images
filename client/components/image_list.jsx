// Create our image list component

// Import React library
import React from 'react';
import ImageDetail from './image_detail';

// Create our component
const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(function(image) {
    return <ImageDetail key={image.title} image={image} />
  });
  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export our component
export default ImageList;
