import React from 'react';
export default function FormsFC(): React.JSX.Element {
  return (
    <div className='form overflow-x-auto'>
      <form>
        <table className="table form_body table-xs">
          <th className='coll coll-0'></th>
          <td className='coll coll-1'></td>
          <td className='coll coll-2 name w-[17rem]'>
            <input type="text" placeholder="Insert name" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 job w-[27rem]'>
            <input type="text" placeholder="Insert job" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 company w-[28rem]'>
            <input type="text" placeholder="Insert company" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 location w-[12.5rem]'>
            <input type="text" placeholder="Insert location" className="input w-full max-w-xs" />
          </td>
          <td className='coll coll-2 lastlogin'>
            <input type="text" placeholder="Insert lastname" className="input w-full max-w-xs" />
          </td>
        </table>
      </form>
    </div>
  );
}
