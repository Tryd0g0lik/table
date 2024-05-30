import handlerClickRemove from '@Handler/handlerButtonRemove';
import { F } from '@Interfaces';
import React from 'react';

export default function RowFC(prop: F | F[] | object): React.JSX.Element {
  return (
    <>
      {
        Array.isArray(prop)
          ? prop.map((item, index) => (
            <tr onClick={handlerClickRemove} data-ind={item.id} key={item.id}>
              <th>{item.id}</th>
              <td>
                <div className="skeleton w-14 h-14"></div>
              </td>
              <th>{item.name}</th>
              <th>{item.job}</th>
              <th>{item.company}</th>
              <th>{item.location}</th>
              <th>{item.lastlogin}</th>
              <th><button data-name='remove' className="remove btn btn-outline">Remove</button></th>
            </tr>
          ))
          : Array.from(Object.values(prop)).map((item, index) => (
            <tr onClick={handlerClickRemove} data-ind={item.id} key={item.id}>
              <th>{item.id}</th>
              <td>
                <div className="skeleton w-14 h-14"></div>
              </td>
              <th>{item.name}</th>
              <th>{item.job}</th>
              <th>{item.company}</th>
              <th>{item.location}</th>
              <th>{item.lastlogin}</th>
              <th><button data-name='remove' className="remove btn btn-outline">Remove</button></th>
            </tr>
          ))
      }
    </>
  );
}
