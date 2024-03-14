import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'; 
import PendientesID from './components/PendientesID';
import PendientesID_y_titles from './components/PendientesID_y_titles';
import PendSinResolverID_titles from './components/PendSinResolverID_titles';
import PendResueltosID_titles from './components/PendResueltosID_titles';
import PendientesID_userID from './components/PendientesID_userID';
import PendResueltosID_userID from './components/PendResueltosID_userID';
import PendSinResolverID_userID from './components/PendSinResolverID_userID';
function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleItemClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Listas de por hacer de la NFL</h1>
      </header>
      <main>
        <Menu onItemClick={handleItemClick} />
        {selectedMenu === 'PendientesID' && <PendientesID />}
        {selectedMenu === 'PendientesID_y_titles' && <PendientesID_y_titles />}
        {selectedMenu === 'PendSinResolverID_titles' && <PendSinResolverID_titles />}
        {selectedMenu === 'PendResueltosID_titles' && <PendResueltosID_titles />}
        {selectedMenu === 'PendientesID_userID' && <PendientesID_userID/>}
        {selectedMenu === 'PendResueltosID_userID' && <PendResueltosID_userID/>}
        {selectedMenu === 'PendSinResolverID_userID' && <PendSinResolverID_userID/>}
      </main>
    </div>
  );
}

export default App;

