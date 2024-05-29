import React, { useEffect, useState } from 'react';
import './App.css';
import { APP_TABLE_PATHNAME, APP_TABLE_URL } from '@Service/env';
import TableFC from './Components/Table';
import Postman from '@ObjectDevelopment/requests';
import { F } from '@Interfaces';
const url = new URL('/api/v1/all', APP_TABLE_URL);
const postman = new Postman(url);

async function request(obj: typeof postman): Promise<F | F[]> {
  const res = await obj.get({ contentType: 'application/json; charset=utf-8' });
  return res as F | F[];
}
const zeroDatas = {
  name: '',
  job: '',
  company: '',
  location: '',
  lastlogin: ''
};

function App(): React.JSX.Element {
  const [prop, setProp] = useState<F | F[]>(zeroDatas);

  useEffect(() => {
    const tableTbody = document.querySelector('table.main tbody');
    if (tableTbody === null) {
      return;
    }

    postman.urls = url;

    async function fetchData(): Promise<boolean> {
      try {
        const result = await request(postman);
        setProp(result);
        return true;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      return true;
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='h1'>
        < h1 className="text-3xl font-bold underline" >
          Hello world!
        </h1 >
      </div>
      <TableFC {...prop} />
    </>
  );
}

export default App;
