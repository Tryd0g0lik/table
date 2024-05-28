import React from 'react';
import handlerMainForm from '@Handler/handlerMainForm';
export default function FormsFC(): React.JSX.Element {
  return (
    <div onClick={handlerMainForm} className='form overflow-x-auto'>
      <form>
        <table className="table form_body table-xs">
          <th className='coll coll-0'></th>
          <td className='coll coll-1'></td>
          <td className='coll coll-2 name w-[17rem]'>
            <input data-name='name' type="text" placeholder="Insert name" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 job w-[27rem]'>
            <input data-name='job' type="text" placeholder="Insert job" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 company w-[28rem]'>
            <input data-name='company' type="text" placeholder="Insert company" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 location w-[12.5rem]'>
            <input data-name='location' type="text" placeholder="Insert location" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 lastlogin'>
            <input data-name='lastname' type="text" placeholder="Insert lastname" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 lastlogin '>
            <button className="btn btn-info w-16">Add</button>
          </td>
        </table>
      </form>
    </div>
  );
}
