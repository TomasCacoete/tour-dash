import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import TeamPage from './pages/TeamPage/TeamPage';

function App()  {
  return (
    <>
      <HashRouter>
            <Routes>
              <Route path="/tour-dash" element={<LandingPage/>}/>
              <Route path="/tour-dash/team" element={<TeamPage/>}/>
            </Routes>
      </HashRouter>
    </>
  );
}

export default App;