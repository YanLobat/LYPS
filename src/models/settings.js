import {createStore, createEffect} from 'effector';

export const $settings = createStore({});

export const loadSettings = createEffect({
  async handler() {
    const bin = '8ingx';
    const res = await fetch('https://api.myjson.com/bins/' + bin);
    return res.json();
  }
});

export const updateSetting = createEffect({
  async handler({settings, name, text}) {
    const updatedSettings = Object.assign(settings, {[name]: text});
    const bin = '8ingx';
    const res = await fetch('https://api.myjson.com/bins/' + bin, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedSettings)
    });
    return req.json();
  }
});

$settings.on(loadSettings.done, (_, {result}) => result);
$settings.on(updateSetting.done, (_, {result}) => result);
