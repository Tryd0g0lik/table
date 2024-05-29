import React, { useEffect, useState } from 'react';
import FormsFC from './Forms';
import handlerButtonCick from '@Handler/handlerMainForm';
import { F } from '@Interfaces';
import RowFC from './Row';

const request = async (e: MouseEvent): Promise<F | F[] | boolean> => {
  const result = await handlerButtonCick(e);
  if ((typeof result).includes('boolean')) {
    return false;
  };

  return result as F[];
};

export default function TableFC(prop: F | F[]): React.JSX.Element {
  // ПЕРЕЗАГРУЗКА СТРАНИЦЫ !!!
  const [props, setProps] = useState<F | F[] | null>(null);
  let i = 0;
  useEffect(() => {
    const div = document.querySelector('.full');
    if (div === null) {
      return;
    }

    const table = div.querySelector('table.main');
    if (table === null) {
      return;
    };

    const tbody = table.querySelector('tbody');
    if (tbody === null) {
      return;
    };

    const requestFull = async (e: MouseEvent): Promise<void> => {
      // дублирует
      if (!((e.target as HTMLElement).tagName).includes('BUTTON')) {
        return;
      }
      e.preventDefault();
      const resp = await request(e);
      if ((typeof resp) === 'boolean') {
        return;
      }
      const newresp = { ...resp as F | F[] };
      if (i !== 0) {
        return;
      }
      i += 1;
      setProps(newresp);
    };

    (div as HTMLDivElement).removeEventListener('click', requestFull);
    (div as HTMLDivElement).addEventListener('click', requestFull);
  }, []);
  const res = ((props === undefined) || (props === null)) ? prop : props;
  return (
    <div className="full overflow-x-auto">
      <table className="main table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>preview</th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowFC {...res} />
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
