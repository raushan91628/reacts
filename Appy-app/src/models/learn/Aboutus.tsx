import React from 'react';

const Aboutus: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toDateString();
  return (
    <div className='Aboutus'>
        <div className='datalistlogin'>
        <strong><b>Date</b></strong>
        <strong><b>Name</b></strong>
        <strong><b>Email</b></strong>
        <strong><b>Password</b></strong>
        </div>
        <div className='datalistloginpage'>
          <p>{formattedDate}</p>
        <strong>{localStorage.getItem('name')}</strong>
        <strong>{localStorage.getItem('email')}</strong>
        
        <strong>{localStorage.getItem('password')}</strong>
        </div>
        <div className='datalistloginpage'>
          <p>{formattedDate}</p>
        <strong>{localStorage.getItem('name')}</strong>
        <strong>{localStorage.getItem('email')}</strong>
        
        <strong>{localStorage.getItem('password')}</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        
        <div className='datalistloginpage'>
        <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('name')}</strong>
        <strong>{localStorage.getItem('email')}</strong>
        
        <strong>{localStorage.getItem('password')}</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
        <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('name')}</strong>
        <strong>{localStorage.getItem('email')}</strong>
        
        <strong>{localStorage.getItem('password')}</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
        <div className='datalistloginpage'>
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek Kumar</strong>
        <strong>Abhishekkumarhhj@gmail.com</strong>
        
        <strong>Kumar@123</strong>
        </div>
     
    </div>
  );
};

export default Aboutus;
