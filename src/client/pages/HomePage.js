import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the home component!</div>
      <button onClick={() => console.log('Hi there!')}>Press Me!</button>
    </div>
  );
};

export default {
  component: Home
}