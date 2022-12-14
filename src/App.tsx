import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ERoute } from './constants';

// Components
import { Header } from './components/Header/Header';

// Pages
import { GraphBoard } from './pages/PracticeBoard/GraphBoard/GraphBoard';
import { CheatSheet } from './pages/CheatSheet/CheatSheet';
import { Formulas } from './pages/CheatSheet/Formulas/Formulas';
import { Homepage } from './pages/Homepage/Homepage';
import { PracticeBoard } from './pages/PracticeBoard/PracticeBoard';
import { Whiteboard } from './pages/PracticeBoard/Whiteboard/Whiteboard';

function App() {
  return (
    <div className='app'>

      <Header />
      
      <main>
        <Routes>
          <Route path={ERoute.HOMEPAGE} element={<Homepage />} />
          <Route path={ERoute.PRACTICE_BOARD} element={<PracticeBoard />} /> 
          <Route path={ERoute.WHITEBOARD} element={<Whiteboard />} />
          <Route path={ERoute.GRAPH} element={<GraphBoard />} />
          <Route path={ERoute.CHEATSHEET} element={<CheatSheet />}>
            <Route path={ERoute.CHEATSHEET_FORMULA} element={<Formulas />} />
          </Route>
        </Routes>
      </main>
      
    </div>
  )
}

export default App;
