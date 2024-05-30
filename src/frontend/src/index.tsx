import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');
if (root !== null || root !== undefined) {
  createRoot(root as HTMLDivElement).render(

    <StrictMode>
      <App />
    </StrictMode>

  );
}
