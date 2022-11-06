import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter } from "react-router-dom";
import Main from './Main'
import Repository from './Repository'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  
<ErrorBoundary>
      <BrowserRouter>
      <Main/>
      
     
      </BrowserRouter>
      </ErrorBoundary>
  </StrictMode>
);
