import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Graph } from './components/Graph/Graph';
import { Header } from './components/Header/Header';
import { CheatSheet } from './components/pages/CheatSheet/CheatSheet';
import { Formulas } from './components/pages/CheatSheet/Formulas/Formulas';
import { Homepage } from './components/pages/Homepage/Homepage';
import { PracticeBoard } from './components/pages/PracticeBoard/PracticeBoard';
import { Whiteboard } from './components/pages/PracticeBoard/Whiteboard/Whiteboard';
import { ERoute } from './constants';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path={ERoute.HOMEPAGE} element={<Homepage />} />
          <Route path={ERoute.PRACTICE_BOARD} element={<PracticeBoard />} /> 
          <Route path={ERoute.WHITEBOARD} element={<Whiteboard />} />
          <Route path={ERoute.GRAPH} element={<Graph />} />
          <Route path={ERoute.CHEATSHEET} element={<CheatSheet />}>
            <Route path={ERoute.CHEATSHEET_FORMULA} element={<Formulas />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App;
