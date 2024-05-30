import React from 'react';
import './App.css';
import TableFC from './Components/Table';
import RowFC from './Components/Row';
import { APP_TABLE_URL } from '@Service/env';
import Postman from '@ObjectDevelopment/requests';

import { storeDispatch } from './reduxs/store';

const url = new URL('/api/v1/all', APP_TABLE_URL);
const postman = new Postman(url);

const fetchData = async (): Promise<any> => {
  try {
    const result = await postman.get({ contentType: 'application/json; charset=utf-8' });
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
  };
};
/* ------ Redux ------ */
const setUserCategory = async (): Promise<void> => {
  const state = await fetchData();
  const tables = {
    type: 'TABLE',
    props: state //.props
  };

  storeDispatch({ ...tables });
};

function App(): React.JSX.Element {
  console.log('TEST:');
  setUserCategory();
  console.log(' Hello world!');
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
