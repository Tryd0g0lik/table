import React, { useEffect, useState } from 'react';
import FormsFC from './Forms';
import handlerRequest from '@Handler/handlerButtonAdd';
import { F } from '@Interfaces';
import RowFC from './Row';
import relevantButton from '@relevant/relevantButton';
import { storeGetstate, storeDispatch } from '../reduxs/store';
let i = 0;

// const handlerRequestFull = (setprops) => async (e: MouseEvent): Promise<void> => {


/* ---- */
// const updateStates = (setprops) => (props): void => {
//   i = 0;
//   setprops(props);
// };
const handlerRequestFull = async (e: MouseEvent): Promise<F | F[] | boolean> => {
  const target = e.target as HTMLElement;
  e.preventDefault();
  const truefalse = relevantButton(target, 'add', 'BUTTON');
  if (!truefalse) {
    return false;
  }
  console.log('TTTTT');
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

  // storeDispatch(resp)
  // setprops(resp);
  return resp;
};
/* ---- */
export default function TableFC(): React.JSX.Element {
  const [props, setProps] = useState<F | F[] | null>(null);
  // const setPropsNew = updateStates(setProps);


  const test = () => {
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

  // fetchData(setPropsNew);

  useEffect(() => {
    // const div = document.querySelector('.full');
    // if (div === null) {
    //   return;
    // }
    // const table = div.querySelector('table.main');
    // if (table === null) {
    //   return;
    // };

    // const tbody = table.querySelector('tbody');
    // if (tbody === null) {
    //   return;
    // };

    // const handlerState = handlerRequestFull(setProps);
    // (div as HTMLDivElement).removeEventListener('click', async (e) => {
    //   e.preventDefault();
    //   const res = await handlerRequestFull(e);
    //   setProps(res as F | F[]);
    // });
    // (div as HTMLDivElement).addEventListener('click', async (e) => {
    //   e.preventDefault();
    //   const res = await handlerRequestFull(e);
    //   if ((res === false) || (res === null)) {
    //     return;
    //   }
    //   setProps(res as F | F[]);
    // });

    test();
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
