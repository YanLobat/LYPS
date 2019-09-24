import React, {useEffect} from 'react';
import {createComponent} from 'effector-react';

import {$users, loadUsers, swipe} from '../../models/users';

export const Recs = createComponent($users, ({isPetOwner}, state) => {
  useEffect(() => {
    loadUsers({isPetOwner});
  }, [isPetOwner]);
  if (state.length === 0) return null;
  const {photo, name, description, job, education, sex}  = state[0];
  return (
    <article>
      <figure style={{position: 'relative', width: '600px'}}>
        <img style={{width: '100%'}} src={photo}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Job: {job}</p>
        <p>Education: {education}</p>
        <p>Sex: {sex}</p>
      </figure>
      <section style={{display: 'flex', justifyContent: 'space-between', margin: '0px auto'}}>
        <button onClick={() => {
            swipe('left');
          }}
        >
          Dislike
        </button>
        <button onClick={() => {
            swipe('right');
        	}}
        >
          Like
        </button>
      </section>
    </article>
  );
});
