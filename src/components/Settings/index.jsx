import React, {useEffect} from 'react';
import {createComponent} from 'effector-react';

import {Setting} from '../Setting';
import {$settings, loadSettings} from '../../models/settings';
import {route} from '../../models/router';

export const Settings = createComponent($settings, (props, settings) => {
  useEffect(() => {
    loadSettings();
  }, []);
  if (settings.length === 0) return null;
  const {
    email, phone, maxRange, ageRange = [],
    personSex, petTypes = [], isPetOwner
  } = settings;
  const [from, to] = ageRange;
  const petTypesStr = petTypes.join(', ');
  return (
    <aside style={{marginTop: '20px'}}>
      <button onClick={() => route('/recs')}>Back</button>
      <h1>Мой профиль</h1>
      <dl>
				<Setting key='email' name='email' content={email} label='Email'/>
        <Setting key='phone' name='phone' content={phone} label='Phone'/>
        <Setting key='maxRange' name='maxRange' content={maxRange} label='Max range in km'/>
        <Setting key='personSex' name='personSex' content={personSex} label='Sex'/>
        <dt>Age range</dt>
        <dd>{from} - {to}</dd>
        <dt>Pet choice</dt>
        <dd>{petTypesStr}</dd>
        <Setting key='isPetOwner' name='isPetOwner' content={isPetOwner} label='Is owner?'/>
      </dl>
    </aside>
  );
});
