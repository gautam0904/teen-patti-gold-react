import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AuthProvider } from './contexts/auth.contexts.jsx';
import AppRoutes from './routes/app.routes.jsx';
import { ProtectedRoute } from './routes/protected.routes.jsx';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar/navbar.components.jsx';
import { GstProvider } from './contexts/gst.contexts';
import { SidebarProvider } from './contexts/sidebar.context';
import './App.css';

// Component to conditionally render Navbar
const ConditionalNavbar = () => {
  const location = useLocation();

  if (excludeNavbarPaths.includes(location.pathname)) {
    return null;
  }
  
  return <Navbar />;
};

const App = () => {
  return (
    <GstProvider>
      {/* <AuthProvider> */}
        <SidebarProvider>
          <ErrorBoundary>
            <Router>
              <Suspense fallback={''}>
                <Toaster position="top-right" />
                
                {/* Conditionally render Navbar */}
                <ConditionalNavbar />
                
                <main className="main-content">
                  <Routes>
                    {AppRoutes}
                    <Route
                      path="/"
                      element={<ProtectedRoute children={<Dashboard />} />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </Suspense>
            </Router>
          </ErrorBoundary>
        </SidebarProvider>
      {/* </AuthProvider> */}
    </GstProvider>
  );
};

export default App;
