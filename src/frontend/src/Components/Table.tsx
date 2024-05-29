import React from 'react';
import FormsFC from './Forms';
import handlerButtonCick from '@Handler/handlerMainForm';
import { F } from '@Interfaces';

export default function TableFC(prop: F | F[]): React.JSX.Element {

  return (
    <div onClick={handlerButtonCick} className="overflow-x-auto">
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
