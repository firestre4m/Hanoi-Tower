import React from 'react';
import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Provider} from 'react-redux';
import store from './redux/store';
import ControlPanelContainer from './components/control_panel_container';
import BoardContainer from './components/board_container';
import './css/app.css'


const App = () => {
  return (
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <div className="app" align="center" >
            <div className="header"><h1>HANOI TOWER</h1></div>
            <ControlPanelContainer className="panel"/>
            <BoardContainer className="board"/>
          </div>
        </DndProvider>
    </Provider>
  );
}



export default App;
