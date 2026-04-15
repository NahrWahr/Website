import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPost from './pages/ProjectPost';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <div className="app-layout">
        <aside className="sidebar" role="complementary">
          <div>
            <header className="header">
              <h1>RN</h1>
              <nav className="nav" aria-label="Main navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/blog">Manuscripts</NavLink>
              </nav>
            </header>
          </div>
          <footer className="footer">
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </footer>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectPost />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
