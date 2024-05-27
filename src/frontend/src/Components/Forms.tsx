import React from 'react';
export default function FormsFC(): React.JSX.Element {
  return (
    <div className='form '>
      <form>
        <div className='form_body flex table-xs'>
          <div className='coll coll-0'></div>
          <div className='coll coll-1'></div>
          <div className='coll coll-2 name'>
            <input type="text" placeholder="Insert name" className="input w-full max-w-xs" />
          </div>
          <div className='coll coll-2 job'>
            <input type="text" placeholder="Insert job" className="input w-full max-w-xs" />
          </div>
          <div className='coll coll-2 company'>
            <input type="text" placeholder="Insert company" className="input w-full max-w-xs" />
          </div>
          <div className='coll coll-2 location'>
            <input type="text" placeholder="Insert location" className="input w-full max-w-xs" />
          </div>
          <div className='coll coll-2 lastlogin'>
            <input type="text" placeholder="Insert lastname" className="input w-full max-w-xs" />
          </div>
        </div>
      </form>
    </div>
  );
}
