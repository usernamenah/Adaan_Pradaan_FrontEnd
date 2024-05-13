import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Page1 from './components/Page1';
import Pagelog2 from './components/Pagelog2';
import Page3 from './components/Page3';
import Adanpradan from './components/Adanpradan';
import Studentprofile from './Studentprofile';
import Studentpage1 from './components/Studentpage1.js';
import Year1 from './components/Year1.js';
import Year2 from './components/Year2.js';
import Year3 from './components/Year3.js';
import Year4 from './components/Year4.js';
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Page1/> }/>
          <Route path="Adanpradan" element={<Adanpradan/> }/>
          {/* <Route path="" element={</> }/> */}
          <Route path="Studentpage1" element={<Studentpage1/> }/>
          <Route path="Adanpradand" element={<Adanpradan/> }/>
          <Route path="Login1" element={<Pagelog2/> }/>
          <Route path="Login2" element={<Page3/> }/>
          <Route path="studpof" element={<Studentprofile/> }/>
          <Route path="year1" element={<Year1/> }/>
          <Route path="year2" element={<Year2/> }/>
          <Route path="year3" element={<Year3/> }/>
          <Route path="year4" element={<Year4/> }/>
          </Routes>
        </Router>
        </div>
    </>
  );
}

export default App;
