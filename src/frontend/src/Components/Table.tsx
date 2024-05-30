import React, { useEffect, useState } from 'react';
import FormsFC from './Forms';
import handlerRequest from '@Handler/handlerButtonAdd';
import { F } from '@Interfaces';
import RowFC from './Row';
import relevantButton from '@relevant/relevantButton';
import { storeGetstate, storeDispatch } from '../reduxs/store';
import { APP_TABLE_URL } from '@Service/env';
import Postman from '@ObjectDevelopment/requests';
let i = 0; // copy drop

/* ---- Handler ADDING ----- */
const handlerRequestFull = async (e: MouseEvent): Promise<F | F[] | boolean> => {
  const target = e.target as HTMLElement;
  e.preventDefault();
  const truefalse = relevantButton(target, 'add', 'BUTTON');
  if (!truefalse) {
    return false;
  }

  const resp = await handlerRequest(e);
  if ((typeof resp) === 'boolean') {
    return false;
  }

  if (i !== 0) {
    return false;
  }

  i += 1;
  if ((resp === false) || (resp === null)) {
    return false;
  }
  return resp;
};

/* ---- */
export default function TableFC(): React.JSX.Element {
  const [props, setProps] = useState<F | F[] | null>(null);

  /* ------ Redux ------ */
  const redux = () => {
    const timeout = setTimeout(() => {
      const getTotalStore = storeGetstate();
      const props_ = getTotalStore.props;

      if (props_.length <= 1) {
        test();
      } else {
        clearTimeout(timeout);
        setProps(props_.props.props);
      }
    }, 100);
  };

  useEffect(() => {
    const div = document.querySelector('.full');
    if (div === null) {
      return;
    }

    /* ------ Handler Remove ------ */
    const nandlerRemove = async (e): Promise<void> => {
      e.preventDefault();
      const url = new URL('/api/v1/all', APP_TABLE_URL);
      const postman = new Postman(url);
      const res = await postman.get({ contentType: 'application/json; charset=utf-8' });
      setProps(res as F | F[]);
    };
    (div as HTMLDivElement).removeEventListener('update', nandlerRemove);
    (div as HTMLDivElement).addEventListener('update', nandlerRemove);

    redux();
  }, []);
  const handlerState = async (e) => {
    e.preventDefault();
    i = 0;
    const res = await handlerRequestFull(e);
    if ((res === false) || (res === null)) {
      return;
    }
    setProps(res as F | F[]);
  };
  return (
    <div onClick={handlerState} className="full overflow-x-auto" >
      <table className="main table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>preview<div className="btm-nav">
            </div></th>
            <th>Name<button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </button></th>
            <th>Job<button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </button></th>
            <th>company<button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </button></th>
            <th>location<button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </button></th>
            <th>Last Login<button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </button></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowFC {...props} />
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <FormsFC />
    </div>
  );
}
