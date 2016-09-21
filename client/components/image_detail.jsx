// Create our image detail component

// Import React library
import React from 'react';

// Create our component
const ImageDetail = (props) => {
  // props.image => This is the image object
  // props.image.title
  // props.image.link

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} alt={props.image.title} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
      </div>
    </li>
  );
};

// Export our component
export default ImageDetail;
