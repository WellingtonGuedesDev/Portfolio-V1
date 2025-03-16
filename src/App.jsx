import React, { useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import AppRouter from './routes/Router';
import Footer from './assets/components/footer/Footer';
import { useContext } from 'react';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <AppRouter />
      <div className='max-w-[1536px] mx-auto px-4'>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;