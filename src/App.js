
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import {  Routes, Route } from 'react-router-dom';
import ProfileImage from './components/ProfileImage';
import Contact from './pages/Contact';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
         <Route index element={<Main/>} />
         <Route path="/contact" element={<Contact />} />
         </Route>
      </Routes>
    </div>
  );
}

export default App;
