import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import TeamPage from './pages/TeamPage/TeamPage';

function App()  {
  return (
    <>
      <HashRouter basename="/tour-dash">
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/team" element={<TeamPage/>}/>
            </Routes>
      </HashRouter>
    </>
  );
}

export default App;