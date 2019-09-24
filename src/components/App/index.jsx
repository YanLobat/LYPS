import React, {useEffect} from 'react';
import {createGate, createComponent, useGate, useStore} from 'effector-react';

import {Recs} from '../Recs';
import {Matches} from '../Matches';
import {Settings} from '../Settings';
import {Info} from '../Info';
import {InfoEdit} from '../InfoEdit';

import {$settings, loadSettings} from '../../models/settings';
import {$router} from '../../models/router';

const Route = createGate();

Route.state.watch(({name}) => {
  history.pushState({}, null, name);
});

const DefaultPage = ({isPetOwner}) => (
  <>
    <Route name="/recs" />
    <Matches/>
    <Recs isPetOwner={isPetOwner}/>
  </>
);

const ProfilePage = () => (
  <>
    <Route name="/profile" />
    <Settings/>
    <Info/>
  </>
);

const ProfileEditPage = () => (
  <>
    <Route name="/profile/edit" />
    <Settings/>
    <InfoEdit/>
  </>
);
const RouterToggler = (props) => <Route {...props}/>

const Content = ({isPetOwner}) => {
  const route = useStore($router);
  useGate(Route, {name: route});
  switch (Route.current.name) {
    case '/recs':
      return <DefaultPage isPetOwner={isPetOwner}/>;
    case '/profile':
      return <ProfilePage/>;
    case '/profile/edit':
      return <ProfileEditPage/>;
    default:
      return <DefaultPage isPetOwner={isPetOwner}/>;
  }
};
export const App = createComponent($settings, ({name}, state) => {
  useEffect(() => {
    loadSettings();
  }, []);
  return (
    <main style={{display:'flex', width: '50%', margin: '0px auto'}}>
      <RouterToggler/>
      <Content isPetOwner={state.isPetOwner}/>
    </main>
  )
});
