import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location={'New York'} offset={3} />
      <Clock location={'London'} offset={-5} />
      <Clock location={'Kyiv'} offset={11} />
    </>
  );
};

export default App;
