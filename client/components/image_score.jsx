import React from 'react';

const ImageScore = (props) => {
  // props.up is the number of upvotes
  // props.down is the number of downvotes

  const { ups, downs } = props;
  // ES6 Destructuring -- Same as:
  //const ups = props.ups;
  //const downs = props.downs;

  const upsPercent = `${100 * (ups / (ups + downs))}%`;
  const downsPercent = `${100 * (downs / (ups + downs))}%`;

  return (
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped"></div>
        <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped"></div>
      </div>
    </div>
  );
};

export default ImageScore;
