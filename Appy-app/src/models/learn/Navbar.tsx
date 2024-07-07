import React, {useState} from 'react';
import'./App.css';
import { Link } from 'react-router-dom'
// export interface adminlogin
// {
//   adminusername:any;
//   adminpassword:any;

// }


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleloginadmin = () => {
    setIsEditFormVisible(prevState => !prevState);
  }
  const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setIsOpen(isOpen=>!isOpen);
  }
  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
// const deleteAccount=()=>{ 
//     localStorage.clear()
//     window.location.reload()
// }
const [isnavbarFormVisible, setisnavbarFormVisible] = useState(false);
  const [adminusername, setUsername] = useState('');
  const [adminpassword, setPassword] = useState('');
  const [error, setError] = useState('');

  const showdata = () => {
    if (adminusername === '8877742073' && adminpassword === 'kss@123') {
      setisnavbarFormVisible(true);
      setError('');
      alert("Login Successfully");
    } else {
      setError('Incorrect Username or Password');
    }
  };
  const showdatauser=()=>
    {
      setisnavbarFormVisible(prevState => !prevState);
    }
    const [isNavbarFormVisible, setIsNavbarFormVisible] = useState(false);
    const toggleNavbar = () => {
      setIsNavbarFormVisible(!isNavbarFormVisible);
    };
  return (
    <div className="navabrmaindiv">
    <nav className="navbar">
      <Link className='menu' to=""></Link>
      {/* <div className="hamburger" onClick={toggleMenu}> */}
        {/* ☰ */}
      {/* </div> */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
          {/* <Link className='menu' to="/home">Home</Link>
        
          <Link className='menu' to="/about">About</Link>
          <Link className='menu' to="/contact">Contact</Link> */}
          <button className='login' onClick={toggleloginadmin}>Login</button>
          <button onClick={logout} className="logout">LogOut</button>
            {/* <button onClick={deleteAccount} className="delete">Delete</button> */}
       </div>
    </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarFormVisible ? 'show' : ''}`} id="navbarNav">

    <div className="columnavbaritem">
    {/* <strong>Inter Application</strong> */}
    <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
        <Link className='link' to="/Contactt">Services</Link>
        <Link className='link' to="/Coko">Feedback</Link>
        <Link className='link' to="/"></Link>
        
        {isnavbarFormVisible && (
          <div className='hrlogin-navbar'>
            <strong>Inter Application</strong>
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/about">About</Link>
        <Link className='link' to="/Dashbord">Dashbord</Link>
        <Link className='link' to="/Registationform">Create Jobs</Link>
        <Link className='link' to="/aboutus">Login Data</Link>
        <Link className='link' to="/a">Job Application</Link>
        <Link className='link' to="/Contactus">Contact Detail</Link>
        <Link className='link' to="/RegistationDatads">Internship Application</Link>
        <button onClick={showdatauser}>LogOut</button>
        </div>
        )}
    </div>
    </div>
    </nav>

    {isEditFormVisible && (
   <div className='admimform'>
    <button className='editcross-button col-1' onClick={toggleloginadmin}>X</button>
   <h1 className='Admin-heading text-center'>Admin Login</h1><hr></hr>
   <strong>Username</strong>
   <input
     type='text'
     value={adminusername}
     onChange={(e) => setUsername(e.target.value)}
   />
   <strong>Password</strong>
   <input
     type='password'
     value={adminpassword}
     onChange={(e) => setPassword(e.target.value)}
   />
   <button onClick={showdata} className='admin-login'>Submit</button>
   {error && <p style={{ color: 'red' }}>{error}</p>}
 </div>
    )}
    

    </div>
  );
};

export default Navbar;
