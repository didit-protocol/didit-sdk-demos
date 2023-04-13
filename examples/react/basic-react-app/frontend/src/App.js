import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes
import loadable from '@loadable/component';

const DynamicDiditProviderComponent = loadable(() => import('./components/Didit/Provider').then(mod => mod.DiditProviderComponent));

const Home = loadable(() => import('./index')); // Assuming you have a Home page component in ./pages/Home

function App() {
  return (
    <Router>
      <main>
        <div>
          <DynamicDiditProviderComponent>
            <Routes> {/* Use Routes instead of Switch */}
              <Route path="/" element={<Home />} /> {/* Change component to element */}
              {/* Add more routes here as needed */}
            </Routes>
          </DynamicDiditProviderComponent>
        </div>
      </main>
    </Router>
  );
}

export default App;