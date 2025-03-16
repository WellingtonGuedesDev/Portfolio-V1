import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectsDetails';
import Projects from '../pages/projects';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
