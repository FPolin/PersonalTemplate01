import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomeLayout from './Layouts';

import Routes from './router';

const App = () => {
  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
        <HomeLayout>
            <Routes />
        </HomeLayout>
    </BrowserRouter>
  )
}

export default App;

