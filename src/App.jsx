import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import TeamPage from './pages/TeamPage/TeamPage';
import { useState } from 'react';

function App()  {
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'team' && <TeamPage />}
    </>
  );
}

export default App;