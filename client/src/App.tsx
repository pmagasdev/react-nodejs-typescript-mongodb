import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: 'flex' }}>
          <Header />
          <Sidebar />
          <main>
            <RightPanel />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
