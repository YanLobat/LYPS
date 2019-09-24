import React, {useState, useEffect} from 'react';
import {useStore} from 'effector-react';

import {$settings, updateSetting} from '../../models/settings';

export const Setting = ({name, content, label}) => {
  const settings = useStore($settings);
  const [settingState, setSettingState] = useState({
    isEditable: false,
    text: ''
  });
  const {isEditable, text} = settingState;
  useEffect(() => {
    setSettingState({isEditable, text: content});
  }, [content]);
  return (
    <React.Fragment>
        <dt>{label}</dt>
      	{isEditable
      		? <React.Fragment>
            <input type='text' value={text} onChange={(event) => {
              setSettingState({isEditable, text: event.target.value});
            }}/>
          	<input type='submit' value='Ok' onClick={(event) => {
              event.preventDefault();
              setSettingState({isEditable: !isEditable, text});
              if (text === content) return;
              updateSetting({settings, name, text});
            }}/>
          </React.Fragment>
          : <dd
              onClick={() => setSettingState({isEditable: !isEditable, text})}>
              {
                name === 'isPetOwner'
                ? <input type='checkbox' checked={!!text} onChange={(event) => {
                    setSettingState({isEditable, text: event.target.checked});
                    updateSetting({settings, name, text: event.target.checked});
                  }}/>
                : text
              }
            </dd>
        }
    </React.Fragment>
  );
};
