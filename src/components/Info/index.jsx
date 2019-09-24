import React, {useEffect} from 'react';
import {createComponent} from 'effector-react';

import {Carousel} from '../../lib/Carousel';
import {$info, loadInfo} from '../../models/info';
import {route} from '../../models/router';

export const Info = createComponent($info, (props, info) => {
  useEffect(() => {
    loadInfo();
  }, []);
  if (Object.keys(info).length === 0) return null;
  const {name, photo, description, sex, job, education} = info;
  return (
    <article style={{marginTop: '20px'}}>
      <Carousel url={photo}/>
      <h2>{name}</h2>
      <p>Sex: {sex}</p>
      <p>Job: {job}</p>
      <p>Education: {education}</p>
      <p>{description}</p>
      <button onClick={() => route('/profile/edit')}>Change info</button>
    </article>
  );
});
