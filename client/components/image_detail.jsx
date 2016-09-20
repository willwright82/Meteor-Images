// Create our image detail component

// Import React library
import React from 'react';

// Create our component
const ImageDetail = (props) => {
  // props.image => This is the image object
  // props.image.title
  // props.image.link

  return (
    <li>
      <img src={props.image.link} alt={props.image.title} />
      {props.image.title}
    </li>
  );
};

// Export our component
export default ImageDetail;
