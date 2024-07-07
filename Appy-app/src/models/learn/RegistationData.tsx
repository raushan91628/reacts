import React, { useEffect, useState } from 'react';

const RegistrationData: React.FC = () => {
  const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [isseeFormVisible, setIsseeFormVisible] = useState<boolean>(false);
  const toggleEditForm = () => {
    setIsEditFormVisible(prevState => !prevState);
  }
  const submitForm = () => {
    setIsFormVisible(prevState => !prevState);
  }
  const submitFormbutton = () => {
    setIsseeFormVisible(prevState => !prevState);
  }
  const resume = localStorage.getItem('fullname');
  const today = new Date();
  const formattedDate = today.toDateString();

  const email=localStorage.getItem('EmailId');
  const takescheduleinterview=()=>
    {
      window.location.href = `mailto:${email}`;
    }
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
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
        <strong><button onClick={toggleEditForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
          {/* <img src={resume} alt="Logo" className='img-flud' id="aboutusimage"/> */}
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        <div>
       <button className='button-schedule-interview' onClick={takescheduleinterview}>Schedule</button>
      </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
        <strong><button onClick={submitFormbutton} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isseeFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek kumar</strong>
        <strong>kumarabhishek@gmail.com</strong>
        <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek kumar</strong>
        <strong>kumarabhishek@gmail.com</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : Abhishek kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : kumarabhishek@gmail.com</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek kumar</strong>
        <strong>kumarabhishek@gmail.com</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : Abhishek kumar </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : kumarabhishek@gmail.com</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>Abhishek kumar</strong>
        <strong>kumarabhishek@gmail.com</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : kumarabhishek@gmail.com</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>kumarabhishek@gmail.com</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
        <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong>{localStorage.getItem('fullname')}</strong>
        <strong>{localStorage.getItem('Emailid')}</strong>
         <strong><button onClick={submitForm} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewalldata'>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>FullName : {localStorage.getItem('fullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong> Email id : {localStorage.getItem('Emailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('Phone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('college')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Course : {localStorage.getItem('course')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Skill : {localStorage.getItem('skill')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('field')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('role')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Year : {localStorage.getItem('year')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Semester : {localStorage.getItem('semester')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('state')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('district')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('current')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('permanent')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('resume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter :{localStorage.getItem('letter')}</strong>
          </div>
        </div>
        <div className='status'>
        <div className='row d-flex'>

          <h1>Status</h1><hr></hr>
          <p>Match to job description</p>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Inprocess
          </div>
          <div className='col-lg-4 col-sm-12'>
            <input type='checkbox' name="select"/>Select
          </div>
          <div className='col-lg-4 col-sm-12'>
          <input type='checkbox' name="Reject"/>Reject
          </div>
        </div>
        </div>
        </div>
        )}
    </div>
  );
};

export default RegistrationData;
