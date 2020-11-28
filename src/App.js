import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import myStore from './components/redux/store';
import { Provider } from 'react-redux';

const  App=()=> {
  return (
    <div className="App">
       <Provider store={myStore}>
       <BrowserRouter>
      <MainComponent />
      </BrowserRouter>
       </Provider>
    
   
    </div>
  );
}

export default App;
