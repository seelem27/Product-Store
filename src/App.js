import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Catalogue from './pages/catalogue/Catalogue';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Topbar />
        <Catalogue />
    </div>
  );
}

export default App;
