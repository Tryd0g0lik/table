import React from 'react';
import './App.css';

import TableFC from './Components/Table';

function App(): React.JSX.Element {
  return (
    <>
      <div className='h1'>
        < h1 className="text-3xl font-bold underline" >
          Hello world!
        </h1 >
      </div>
      <TableFC />
    </>
  );
}

export default App;
