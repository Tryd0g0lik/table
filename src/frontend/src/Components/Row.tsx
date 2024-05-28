import React from 'react';

export default function RowFC(props): React.JSX.Element {
  const { id, name, } = props;
  return (
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
  );
}
