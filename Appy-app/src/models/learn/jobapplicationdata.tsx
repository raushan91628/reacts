import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const RegistrationData: React.FC = () => {
  const [IsEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
  const [isEditVisible, setIsEditVisible] = useState<boolean>(false);
  const toggleEditForm = () => {
    setIsEditFormVisible(prevState => !prevState);
  }
  const toggleForm = () => {
    setIsEditVisible(prevState => !prevState);
  }
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
    localStorage.setItem("status",e.target.value);
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
    if (selectedStatus === 'Status:-Selected') {
      sendEmail();
    }
  };
  // const handleChange = (event) => {
  //   const selectedStatus = event.target.value;
  //   setStatus(selectedStatus);
  //   if (selectedStatus === 'Status:-Selected') {
  //     sendEmail();
  //   }
  // };
  const sendEmail = () => {
    const email = localStorage.getItem('jemailid');
    const fullName = localStorage.getItem('jfullname');

    const templateParams = {
      to_name: fullName,
      to_email: email,
      message: 'Congratulations! You have been selected.',
      // Add other necessary params here
    };
    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
    });
};
const email = localStorage.getItem('jemailid');
const takescheduleinterview=()=>
  {
    window.location.href = `mailto:${email}`;
  }

//date section
  const today = new Date();
  const formattedDate = today.toDateString();

  return (
    <div className="interndata">
       <div className='datalistintern'>
        <strong>Date</strong>
        <strong><b>Name</b></strong>
        <strong><b>Email</b></strong>
        <strong><b>Action</b></strong>
        </div>
        <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {IsEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      <div>
       <button className='button-schedule-interview' onClick={takescheduleinterview}>Schedule</button>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> Raushan Kumar</strong>
        <strong> kumarraushan91628@gmail.com</strong>
        <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      <div>
       <button className='button-schedule-interview' onClick={takescheduleinterview}>Schedule</button>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> Abhishek kumar</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :Abhishek kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> Abhishek kumar</strong>
        <strong> Abhishek656kumar@outlook.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :Abhishek kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> Abhishek kumar</strong>
        <strong> abhishekkumar8778@gmail.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :Abhishek kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> Golu Kumar</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :Golu Kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> Golu Kumar</strong>
        <strong> Abhishekkumar@gmail.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :Golu Kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> Abhishek Kumar</strong>
        <strong> Abhishekkumar91776@yahoo.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :Golu Kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :golukumar91776@yahoo.com</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> golukumar91776@yahoo.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :golukumar91776@yahoo.com</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> golukumar91776@yahoo.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :golukumar91776@yahoo.com</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> golukumar91776@yahoo.com</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
         <strong><button onClick={toggleForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditVisible && (
        <div className='viewalldata'>
           <button onClick={toggleEditForm} className='editcross-button'>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
        
    </div>
    
  );
};

export default RegistrationData;
