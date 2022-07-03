/* esLint-disable */

import './App.css';
import Header from './components/header';
import SideNavMenu from './components/sidenavmenu_collapae';
import Widget1 from './components/widget1';
import Widget6 from './components/widget6';
import Unify from './components/unify';
import Widget4 from './components/widget4';
import Widget2 from './components/widget2';
import Widget5 from './components/widget5';
import Location from './components/location';
import ZoomControl from './components/zoomControl';
import Frame from './components/frame';
import Toolbar from './components/toolbar';
import ToolTop from './components/tooltop';

function App() {

  return (
    <div className="App">
      <Header/>
      <SideNavMenu/>
      <Widget1/>
      <Widget6/>
      <Unify/>
      <Widget4/>
      <Widget2/>
      <Widget5/>
      <Location/>
      <ZoomControl/>
      <Frame/>
      <Toolbar/>
      <ToolTop/>
    </div>
  );
}

export default App;


