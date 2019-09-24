import React from 'react';

import {route} from '../../models/router';

export const Matches = () => {
  return (
    <aside style={{marginTop: '20px'}}>
      <button onClick={() => route('/profile')}>Profile</button>
      <p>У тебя нет мэтчей земля пухом братишка</p>
    </aside>
  );
};
