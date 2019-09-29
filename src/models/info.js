import {createStore, createEffect, createEvent, forward} from 'effector';

export const sex = createStore('');
export const description = createStore('');
export const photo = createStore('');
export const job = createStore('');
export const education = createStore('');

export const info = {
  sex,
  description,
  photo,
  job,
  education
};

export const changeSex = createEvent();
export const changeDescription = createEvent();
export const changePhoto = createEvent();
export const changeJob = createEvent();
export const changeEducation = createEvent();


export const updateInfo = createEffect({
  async handler({newInfo}) {
    const bin = '1ehxc1';
    const res = await fetch('https://api.myjson.com/bins/' + bin, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInfo),
    })
    return res.json()
  },
});

export const loadInfo = createEffect({
  async handler() {
    const bin = '1ehxc1';
    const res = await fetch('https://api.myjson.com/bins/' + bin);
    return res.json();
  }
});

function updateByResponse(effect, shape) {
  for (const key in shape) {
    shape[key].on(effect.done, (_, {result}) => result[key])
  }
}

function multiForward(storeEventPairs) {
  storeEventPairs.forEach((storeEventPair) => {
    const [event, proxyStore] = storeEventPair;
    console.log(event, proxyStore);
    forward({
      from: event,
      to: proxyStore,
    });
  });
}

// multiForward([[sex,changeSex], [description, changeDescription], [photo, changePhoto], [job, changeJob], [education, changeEducation]]);
updateByResponse(loadInfo, info);
updateByResponse(updateInfo, info);

forward({
  from: changeDescription,
  to: description,
});
forward({
  from: changeSex,
  to: sex,
});
forward({
  from: changePhoto,
  to: photo,
});
forward({
  from: changeJob,
  to: job,
});
forward({
  from: changeEducation,
  to: education,
});
