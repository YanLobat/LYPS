import {createStore, createEffect, createEvent} from 'effector';

export const $info = createStore({});

export const changeSex = createEvent();
export const changeDescription = createEvent();
export const changeJob = createEvent();
export const changeEducation = createEvent();

export const loadInfo = createEffect({
  async handler() {
    const bin = '1ehxc1';
    const res = await fetch('https://api.myjson.com/bins/' + bin);
    return res.json();
  }
});

$info.on(loadInfo.done, (_, {result}) => result);

$info.on(changeSex, (info, sex) => Object.assign({}, info, {sex}));
$info.on(changeDescription, (info, description) => Object.assign({}, info, {description}));
$info.on(changeJob, (info, job) => Object.assign({}, info, {job}));
$info.on(changeEducation, (info, education) => Object.assign({}, info, {education}));
