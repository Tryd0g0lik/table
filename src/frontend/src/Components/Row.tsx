import { F } from '@Interfaces';
import React from 'react';

export default function RowFC(prop: F | F[] | object): React.JSX.Element {
  // const result = (Array.isArray(prop)) ? prop : [prop];

  return (
    <>
      {
        Array.isArray(prop)
          ? prop.map((item, index) => (
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
          ))
          : Array.from(Object.values(prop)).map((item, index) => (
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
          ))
      }
      {/* {result.map((item, index) => (
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
      ))} */}
    </>
  );
}
