import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import TeamPage from './pages/TeamPage/TeamPage';

function App()  {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/tour-dash" element={<LandingPage/>}/>
              <Route path="/tour-dash/team" element={<TeamPage/>}/>
            </Routes>
      </Router>
    </>
  );
}

export default App;