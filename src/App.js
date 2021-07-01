import './App.css';
import React from "react";
import {configureStore} from 'redux-toolkit';


const App = () => {
  const store = configureStore();

  return (
      <Provider store={store}>
          <WeatherTable></WeatherTable>
      </Provider>
  );
}

export default App;
