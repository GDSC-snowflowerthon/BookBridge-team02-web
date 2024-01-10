import React from 'react'
import { Global } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import PageRoute from './PageRoute'

const App = () =>{

  return (
    <BrowserRouter>
      <PageRoute/>
    </BrowserRouter>
  );
};

export default App;