import React, { useState } from 'react';
import './App.css';

interface FormState {
  internname: string;
  internemail: string;
  internmessage: string;
  internsalary: string; // Assuming salary is a string based on your form
}

interface JobFormState {
  jobname: string;
  jobemail: string;
  jobmessage: string;
  jobsalary: string; // Assuming salary is a string based on your form
}

const App: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    internname: '',
    internemail: '',
    internmessage: '',
    internsalary: ''
  });

  const [jobFormState, setJobFormState] = useState<JobFormState>({
    jobname: '',
    jobemail: '',
    jobmessage: '',
    jobsalary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChangedata = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Additional validation or processing logic can be added here

    // Clear form state or perform any post-submission actions

    // For now, we assume we only want to save the data to localStorage
  };

  const createjobapplication = () => {
    // Save job form data to local storage with specific key-value pairs
    localStorage.setItem('jobname', jobFormState.jobname);
    localStorage.setItem('jobemail', jobFormState.jobemail);
    localStorage.setItem('jobmessage', jobFormState.jobmessage);
    localStorage.setItem('jobsalary', jobFormState.jobsalary);
    
    // Optional: Clear form fields after submission
    setJobFormState({
      jobname: '',
      jobemail: '',
      jobmessage: '',
      jobsalary: ''
    });
  };

  const createinternshipapplication = () => {
    // Save internship form data to local storage with specific key-value pairs
    localStorage.setItem('internname', formState.internname);
    localStorage.setItem('internemail', formState.internemail);
    localStorage.setItem('internmessage', formState.internmessage);
    localStorage.setItem('internsalary', formState.internsalary);
    
    // Optional: Clear form fields after submission
    setFormState({
      internname: '',
      internemail: '',
      internmessage: '',
      internsalary: ''
    });
  };

  // Toggle form visibility
  const [isinternshipform, setisinternshipform] = useState<boolean>(false);
  const [isjobform, setjobform] = useState<boolean>(false);

  const createinternship = () => {
    setisinternshipform(prevState => !prevState);
  };

  const createjob = () => {
    setjobform(prevState => !prevState);
  };

  return (
    <div className="registration">
      <button onClick={createinternship} className='creatinternshipbutton col-2'>+ Create Internship</button>
      {/* Internship Form section */}
      {isinternshipform && (
        <form onSubmit={handleSubmit} className='formsection'>
          <button onClick={createinternship} className='editcross-button col-1'>X</button>
          <div className="form">
            <h2 className='creat-internship-form'>Create Internship form</h2><hr></hr>
            <label htmlFor="internname">Title:</label>
            <input
              type="text"
              id="internname"
              name="internname"
              value={formState.internname}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="internemail">Skill:</label>
            <input
              type="email"
              id="internemail"
              name="internemail"
              value={formState.internemail}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="internmessage">Location:</label>
            <input
              type='text'
              id="internmessage"
              name="internmessage"
              value={formState.internmessage}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="internsalary">Salary:</label>
            <input
              type='text'
              id="internsalary"
              name="internsalary"
              value={formState.internsalary}
              onChange={handleChange}
            />
          </div>
          {/* Button section */}
          <button type="submit" onClick={createinternshipapplication} className="create-internship col-3">Submit</button>
        </form>
      )}
      {/* Display data section */}
      <h2 className='internship-heading'>Internship</h2>
      {/* Display saved internship data here */}
      <div className='box'>
        <div className="col-md-6  ">
          <strong><strong><b>Title:</b></strong>{localStorage.getItem('internname')}</strong><br></br>
          <strong><strong><b>Skill:</b></strong>{localStorage.getItem('internemail')}</strong><br></br>
          <strong><strong><b>Location:</b></strong>{localStorage.getItem('internmessage')}</strong><br></br>
          <strong><strong><b>Salary:</b></strong>{localStorage.getItem('internsalary')}</strong>
          </div>
        </div>
        <div className='box'>
        <div className="col-md-6">
        <strong><strong><b>Title:</b></strong>Salesforce Development Internship</strong><br></br>
          <strong><strong><b>Skill:</b></strong>Javascript , Typescript , Html ,Css ,Bootstrap</strong><br></br>
          <strong><strong><b>Location:</b></strong>India</strong><br></br>
          <strong><strong><b>Salary:</b></strong>Performance Based</strong>
          </div>
          </div>

      <button onClick={createjob} className='creatinternshipbutton col-2'>+ Create Job</button>
      {/* Job Form section */}
      {isjobform && (
        <form onSubmit={handleSubmit} className='formsection'>
          <button onClick={createjob} className='editcross-button col-1'>X</button>
          <div className="form">
            <h2 className='creat-internship-form'>Create Job form</h2><hr></hr>
            <label htmlFor="jobname">Title:</label>
            <input
              type="text"
              id="jobname"
              name="jobname"
              value={jobFormState.jobname}
              onChange={handleChangedata}
            />
          </div>
          <div className="form">
            <label htmlFor="jobemail">Skill:</label>
            <input
              type="email"
              id="jobemail"
              name="jobemail"
              value={jobFormState.jobemail}
              onChange={handleChangedata}
            />
          </div>
          <div className="form">
            <label htmlFor="jobmessage">Location:</label>
            <input
              type='text'
              id="jobmessage"
              name="jobmessage"
              value={jobFormState.jobmessage}
              onChange={handleChangedata}
            />
          </div>
          <div className="form">
            <label htmlFor="jobsalary">Salary:</label>
            <input
              type='text'
              id="jobsalary"
              name="jobsalary"
              value={jobFormState.jobsalary}
              onChange={handleChangedata}
            />
          </div>
          {/* Button section */}
          <button type="submit" onClick={createjobapplication} className="create-internship col-3">Submit</button>
        </form>
      )}
      {/* Display data section */}
      <h2 className='internship-heading'>Job</h2>
      <div className='box'>
        <div className="col-md-6  ">
          <strong><strong><b>Title:</b></strong>{localStorage.getItem('jobname')}</strong><br></br>
          <strong><strong><b>Skill:</b></strong>J{localStorage.getItem('jobemail')}</strong><br></br>
          <strong><strong><b>Location:</b></strong>{localStorage.getItem('jobmessage')}</strong><br></br>
          <strong><strong><b>Salary:</b></strong>{localStorage.getItem('jobsalary')}</strong>
          </div>
        </div>
        <div className='box'>
        <div className="col-md-6">
        <strong><strong><b>Title:</b></strong>Salesforce Development Internship</strong><br></br>
          <strong><strong><b>Skill:</b></strong>Javascript , Typescript , Html ,Css ,Bootstrap</strong><br></br>
          <strong><strong><b>Location:</b></strong>India</strong><br></br>
          <strong><strong><b>Salary:</b></strong>Performance Based</strong>
          </div>
          </div>
    </div>
  );
};

export default App;
