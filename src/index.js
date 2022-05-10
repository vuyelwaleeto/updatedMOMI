import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Login from "./LoginPage";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Login/>
  </StrictMode>
);
