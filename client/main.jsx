// Any code here will immediately run

// Import React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create a component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

// Render this component on the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
