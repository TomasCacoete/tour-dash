import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import TeamPage from './pages/TeamPage/TeamPage';
import { useState, useRef } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const contactsRef = useRef(null);

  const scrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} scrollToContacts={scrollToContacts} />
      {currentPage === 'landing' && <LandingPage contactsRef={contactsRef} />}
      {currentPage === 'team' && <TeamPage />}
    </>
  );
}

export default App;
