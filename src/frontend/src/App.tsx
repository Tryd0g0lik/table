import React from 'react';
import './App.css';

import TableFC from './Components/Table';

function App(): React.JSX.Element {
  return (
    <>
      < h1 className="text-3xl font-bold underline" >
        Hello world!
      </h1 >
      <TableFC />
    </>
  );
}

export default App;
