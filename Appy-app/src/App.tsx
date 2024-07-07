import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './models/learn/Home';
import About from './models/learn/About';
import Aboutus from './models/learn/Aboutus';
import Dashbord from './models/learn/hr';
import Hrdata from './models/learn/hrdata';
import A from './models/learn/jobapplicationdata';
import Navbar from './models/learn/Navbar';
import Contact from './models/learn/contact';
import Contactt from './models/learn/contactt';
import Contactus from './models/learn/contactus';
import Registationform from './models/learn/Registationform';
import RegistationDatads from './models/learn/RegistationData';
// import hrhomepage from './models/learn/hrhomepage';

const App: React.FC = () => {
  return (
    
    <Router>
      {/* <Navbar /> */}
      <Hrdata />
      <div>
        <Routes>
        {/* <Route path="" element={< singhup/>} /> */}
        {/* <Route path="" element={<Hrdata />} /> */}
        <Route path="" element={<Navbar />} />
          <Route path="home" element={<Home />} />
          <Route path="Registationform" element={<Registationform/>} />
          <Route path="about" element={<About />} />
          <Route path="hrdata" element={<Hrdata />} />
          <Route path="Contactt" element={<Contactt />} />
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="Contactus" element={<Contactus/>} />
          <Route path="RegistationDatads" element={<RegistationDatads />} />
          <Route path="a" element={<A />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
