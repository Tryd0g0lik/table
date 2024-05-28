import { F } from '@Interfaces';
import React from 'react';

export default function RowFC(props: F | F[]): React.JSX.Element {
  const result = (Array.isArray(props)) ? props : [props];

  return (
    <>
      {result.map((item, index) => (
        <tr key={index}>
          <th>{item.id}</th>
          <td>
            <div className="skeleton w-14 h-14"></div>
          </td>
          <th>{item.name}</th>
          <th>{item.job}</th>
          <th>{item.company}</th>
          <th>{item.location}</th>
          <th>{item.lastlogin}</th>
          <th></th>
        </tr>
      ))}
    </>
  );
}
