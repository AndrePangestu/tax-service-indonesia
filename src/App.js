
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routers/RouterConfig';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig/>
    </BrowserRouter>
  );
}

export default App;
