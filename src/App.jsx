import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

function App()  {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/tour-dash" element={<LandingPage/>}/>
            </Routes>
      </Router>
    </>
  );
}

export default App;