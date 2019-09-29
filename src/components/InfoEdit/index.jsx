import React, {useEffect} from 'React';
import {createComponent, useStore} from 'effector-react';

import {Carousel} from '../../lib/Carousel';
import {info, loadInfo, changePhoto, changeSex, changeJob, changeEducation, changeDescription} from '../../models/info';
import {route} from '../../models/router';

const InfoItem = ({label, value, changeEvent, isTextArea = false}) => {
  const state = useStore(value);
  return (
    <React.Fragment>
      <p>{label}</p>
      {
        isTextArea
        ? <textarea value={state} onChange={(event) => changeEvent(event.target.value)}></textarea>
        : <input type='text' value={state} onChange={(event) => changeEvent(event.target.value)}/>
      }
    </React.Fragment>
  );
};

export const InfoEdit = (props) => {
  //TODO понять почему если здесь использовать useEffect получаю Invariant Violation: Invalid hook call
  loadInfo();
  const {name, photo, description, sex, job, education} = info;
  return (
    <article style={{marginTop: '20px'}}>
      <Carousel url={photo}/>
      <InfoItem value={sex} label='Sex:' changeEvent={changeSex}/>
      <InfoItem value={job} label='Job:' changeEvent={changeJob}/>
      <InfoItem value={education} label='Education:' changeEvent={changeEducation}/>
      <InfoItem value={description} label='About:' changeEvent={changeDescription} isTextArea/>
      <button onClick={() => route('/profile')}>Save</button>
    </article>
  );
};
