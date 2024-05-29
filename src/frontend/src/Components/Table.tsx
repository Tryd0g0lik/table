import React, { useEffect, useState } from 'react';
import FormsFC from './Forms';
import handlerButtonCick from '@Handler/handlerMainForm';
import { F } from '@Interfaces';
import RowFC from './Row';

export default function TableFC(prop: F | F[]): React.JSX.Element {
  useEffect(() => {
    async function request(e: MouseEvent): Promise<F | F[]> {
      const result = await handlerButtonCick(e);
      if ((typeof result).includes('boolean')) {
        return;
      };

      return result as F[];
    };

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

    async function requestFull(e: MouseEvent): Promise<void> {
      const i = 0; // дублирует
      if (!((e.target as HTMLElement).tagName).includes('BUTTON')) {
        return;
      }
      e.preventDefault();
      const resp = await request(e);
      const newresp = Object.values(<RowFC {...resp} />);

      (tbody as HTMLTableSectionElement).insertAdjacentHTML('beforeend', newresp[0]);
    };

    (div as HTMLDivElement).removeEventListener('click', requestFull);
    (div as HTMLDivElement).addEventListener('click', requestFull);
  }, []);

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
          <RowFC {...prop} />
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
