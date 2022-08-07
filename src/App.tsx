import React from 'react';
import './App.scss';
import RedBlackTree from './components/RedBlackTree';
import Header from './views/layout/components/Header';
// import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <InputField /> */}
      <RedBlackTree />
    </div>
  );
};

export default App;
