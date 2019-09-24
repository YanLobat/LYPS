import React, {useEffect} from 'React';
import {createComponent} from 'effector-react';

import {Carousel} from '../../lib/Carousel';
import {$info, loadInfo, changeSex, changeJob, changeEducation, changeDescription} from '../../models/info';
import {route} from '../../models/router';

export const InfoEdit = createComponent($info, (props, info) => {
  //TODO понять почему если здесь использовать useEffect получаю Invariant Violation: Invalid hook call
  if (Object.keys(info).length === 0) {
    loadInfo();
  };
  const {name, photo, description, sex, job, education} = info;
  return (
    <article style={{marginTop: '20px'}}>
      <Carousel url={photo}/>
      <p>Sex:</p>
      <input type='text'value={sex} onChange={(event) => changeSex(event.target.value)}/>
      <p>Job:</p>
      <input type='text'value={job} onChange={(event) => changeJob(event.target.value)}/>
      <p>Education</p>
      <input type='text'value={education} onChange={(event) => changeEducation(event.target.value)}/>
      <p>About</p>
      <textarea value={description} onChange={(event) => changeDescription(event.target.value)}></textarea>
      <button onClick={() => route('/profile')}>Save</button>
    </article>
  );
});
