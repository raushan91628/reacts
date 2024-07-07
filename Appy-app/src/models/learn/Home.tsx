import React, { useState,useEffect } from 'react';
import './Registationform';
import { closeSync } from 'fs';
// import myImage from './';
interface FormState {
  Fullname: string;
  email: string;
  message: string;
}
interface FormData {
  fullname: string;
  Emailid: string;
  phone: string;
  college: string;
  course: string;
  skill:string;
  field: string;
  role: string;
  year: string;
  semester: string;
  state: string;
  district: string;
  current: string;
  permanent: string;
  resume: File | null;
  letter: File | null;
}
interface JobFormValues {
  jfullname: string;
  jemailid: string;
  jphone: string;
  jcollege: string;
  jcource: string;
  jfield: string;
  jrole: string;
  jerole: string;
  jyear: string;
  jstate: string;
  jdistrict: string;
  jexperience: string;
  jcompany: string;
  jlocation: string;
  jresume: File | null;
  jletter: File | null;
  jcurrent: string;
  jparmanent: string;
}


  

const Home: React.FC = (data) => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    Emailid: '',
    phone: '',
    college: '',
    course: '',
    skill:'',
    field: '',
    role: '',
    year: '',
    semester: '',
    state: '',
    district: '',
    current: '',
    permanent: '',
    resume: null,
    letter: null,
  });
  const [JobFormValues, setJobFormValues] = useState<JobFormValues>({
    jfullname: '',
    jemailid: '',
    jphone: '',
    jcollege: '',
    jcource: '',
    jfield: '',
    jrole: '',
    jerole: '',
    jyear: '',
    jstate: '',
    jdistrict: '',
    jexperience: '',
    jcompany: '',
    jlocation: '',
    jresume: null,
    jletter:null,
    jcurrent: '',
    jparmanent: '',
  });
  const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
  const [isintenshipform, setintenshipform] = useState<boolean>(false);
  const [isjobform, setjobform] = useState<boolean>(false);
  const submit = () => {
    alert("Your response has been submitted successfully! Please wait for admin approval.");
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleChangejob = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;

    setJobFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
   const handlejobdata=()=>
    {
      Object.entries(JobFormValues).forEach(([key, value]) => {
        localStorage.setItem(key, value instanceof File ? value.name : value);
      });
    }
  const takeinternshipvalue=()=>
    {
      // localStorage.setItem("fullname");
      Object.entries(formData).forEach(([key, value]) => {
        localStorage.setItem(key, value instanceof File ? value.name : value);
      });
    }

  const toggleEditForm = () => {
    setIsEditFormVisible(prevState => !prevState);
  }
  const toggleapplicationform = () => {
    setintenshipform(prevState => !prevState);
  }

  const togglejobform = () => {
    setjobform(prevState => !prevState);
  }

  //registation data 
  const [registrationDataList, setRegistrationDataList] = useState<{ key: string, data: FormState }[]>([]);

  useEffect(() => {
    // Load saved form data from local storage when the component mounts
    const keys = Object.keys(localStorage).filter(key => key.startsWith('contactFormData_'));
    const dataList = keys.map(key => ({
      key,
      data: JSON.parse(localStorage.getItem(key)!)
    }));
    setRegistrationDataList(dataList);
  }, []);
  //job data
  let userData = localStorage.getItem("contactFormDataList");
  if (userData !== null) {
  let userObj = JSON.parse(userData);
  let userName = userObj.name;
  console.log(userName);
  }

  return (
    <div className='home'>
      <h1>Welcome {localStorage.getItem('name')}</h1>
      <hr />
      <div className='profilesection'>
        <p className="profile"></p>
        {/* <p>{userName}</p> */}
        <p><b>{localStorage.getItem('name')}</b></p>
        <p><b>{localStorage.getItem('email')}</b></p>
        <p className='applicationstatus'><b>{localStorage.getItem('status') }</b></p>
        <button onClick={toggleEditForm} className='esitnamesection'>Edit</button>
      </div>
      {isEditFormVisible && (
        <div className='editform'>
          <form className='contacteditform'>
          <button onClick={toggleEditForm} className='editcross-button col-1'>X</button>
            <h1 className='editformheading'>Edit form</h1><hr></hr>
            <label>Name:</label>
            <input type="text" name="name" />

            <label>Email:</label>
            <input type="email" name="email" />
            <label>Phone:</label>
            <input type="Phone" name="Phone" />
            <label>Qualification:</label>
            <input type="Phone" name="quqlification" />

            <label>Address:</label>
            <textarea name="message" />

            <button type="submit"className='editprofile-button col-4' onClick={submit}>Submit</button>
          </form>
        </div>
      )}
      <div className="row d-flex  mx-5 my-5">
        <h1 className='internship-heading'>Internship</h1>
        <div className='box'>
        <div className="col-md-6  ">
          <strong><strong><b>Title:</b></strong>{localStorage.getItem('internname')}</strong><br></br>
          <strong><strong><b>Skill:</b></strong>{localStorage.getItem('internemail')}</strong><br></br>
          <strong><strong><b>Location:</b></strong>{localStorage.getItem('internmessage')}</strong><br></br>
          <strong><strong><b>Salary:</b></strong>{localStorage.getItem('internsalary')}</strong>
          <div className="d-grid gap-2 col-6">
            <a className="viewmore-button btn-white bg-white" href="#">View more</a>
            <button onClick={toggleapplicationform} className='apply-button-form'>Apply</button>
          </div>
          </div>
        </div>
        <div className='box'>
        <div className="col-md-6">
        <strong><strong><b>Title:</b></strong>Salesforce Development Internship</strong><br></br>
          <strong><strong><b>Skill:</b></strong>Javascript , Typescript , Html ,Css ,Bootstrap</strong><br></br>
          <strong><strong><b>Location:</b></strong>India</strong><br></br>
          <strong><strong><b>Salary:</b></strong>Performance Based</strong>
          <div className="d-grid gap-2 col-6">
            <a className="viewmore-button btn-white bg-white" href="#">View more</a>
            <button onClick={toggleapplicationform} className='apply-button-form'>Apply</button>
          </div>
          </div>
        </div>
      </div>
      {isintenshipform && (
      <div className='applicationform-internship'>
      <button onClick={toggleapplicationform} className='editcross-button col-1'>X</button>
        <h1 className='headinginternship'>Internship Application form</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Name:-
            </strong>
            <input type="text" name="fullname" onChange={handleChange}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Email Id:-
            </strong>
            <input type="email" name="Emailid" onChange={handleChange}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Phone:-
            </strong>
            <input type="Phone" name="Phone" onChange={handleChange} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Collage:-
            </strong>
            <input type="text" name="college" onChange={handleChange} />
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Cource:-
            </strong>
            <input type="text" name="cource" onChange={handleChange}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Field:-
            </strong>
            <input type="text" name="field" onChange={handleChange}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Role:-
            </strong>
            <input type="text" name="role" onChange={handleChange}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Year:-
            </strong>
            <input type="text" name="year" onChange={handleChange}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Semester:-
            </strong>
            <input type="Phone" name="semester" onChange={handleChange} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Skill:-
            </strong>
            <input type="text" name="Skill" onChange={handleChange}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your state:-
            </strong>
            <input type="text" name="state" onChange={handleChange}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your District:-
            </strong>
            <input type="text" name="district" onChange={handleChange}/>
          </div>
        </div>
        <div className='row d-flex p-4'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Resume:-
            </strong>
            <input type="file" name="resume" onChange={handleChange}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Cover Letter:-
            </strong>
            <input type="file" name="letter" onChange={handleChange}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Current Address:-
            </strong>
            <textarea name="current" onChange={handleChange}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Parmanent Address:-
            </strong>
            <textarea  name="permanent" onChange={handleChange}/>
          </div>
        </div>
        <button className='col-4 text-center' onClick={takeinternshipvalue}>Submit</button>

      </div>
      )}
      <div className="row d-flex  mx-5 my-5">
        <h1 className='internship-heading'> Opening Job</h1>
        <div className='box'>
        <div className="col-md-6  ">
        <strong><strong><b>Title:</b></strong>{localStorage.getItem('jobname')}</strong><br></br>
          <strong><strong><b>Skill:</b></strong>J{localStorage.getItem('jobemail')}</strong><br></br>
          <strong><strong><b>Location:</b></strong>{localStorage.getItem('jobmessage')}</strong><br></br>
          <strong><strong><b>Salary:</b></strong>{localStorage.getItem('jobsalary')}</strong>
          <div className="d-grid gap-2 col-6">
            <a className="viewmore-button btn-white bg-white" href="#">View more</a>
            <button onClick={togglejobform} className='apply-button-form'>Apply</button>
          </div>
          </div>
        </div>
        <div className='box'>
        <div >
        <strong><strong><b>Title:</b></strong>Salesforce Development Internship</strong><br></br>
        <div className='d-flex'>
          <strong className='col-lg-6 col-md-12 col-sm-12'><strong><b>Skill:</b></strong>Javascript , Typescript , Html ,Css ,Bootstrap</strong><br></br>
          <strong className='col-lg-6 col-md-12 col-sm-12 '><strong><b>Start Date:</b></strong>Javascript , Typescript , Html ,Css ,Bootstrap</strong><br></br>
          </div>
          <div className='d-flex'>
          <strong className='col-6'><strong><b>Location:</b></strong>India </strong><br></br>
          <strong className='col-6 '><strong><b>End Date:</b></strong>Javascript , Typescript , Html ,Css ,Bootstrap</strong><br></br>
          </div>
          <strong><strong><b>Salary:</b></strong>Performance Based</strong>
          <div className="d-grid gap-2 col-6">
            <a className="viewmore-button btn-white bg-white" href="#">View more</a>
            <button onClick={togglejobform} className='apply-button-form col-6'>Apply</button>
          </div>
          </div>
        </div>
      </div>
      {isjobform && (
      <div className='job-application-form'>
        <button onClick={togglejobform} className='editcross-button col-1'>X</button>
          <h1 className='headinginternship'>Job Application form</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Name:-
            </strong>
            <input type="text" name="jfullname" onChange={handleChangejob}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Email Id:-
            </strong>
            <input type="email" name="jemailid" onChange={handleChangejob} />
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Phone:-
            </strong>
            <input type="Phone" name="jphone" onChange={handleChangejob} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Collage:-
            </strong>
            <input type="text" name="jcollege" onChange={handleChangejob}  />
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Cource:-
            </strong>
            <input type="text" name="jcource" onChange={handleChangejob}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Field:-
            </strong>
            <input type="text" name="jfield" onChange={handleChangejob}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Role:-
            </strong>
            <input type="text" name="jrole" onChange={handleChangejob} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Year:-
            </strong>
            <input type="text" name="jyear" onChange={handleChangejob} />
          </div>
        </div>
        
        
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your state:-
            </strong>
            <input type="text" name="jstate" onChange={handleChangejob} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your District:-
            </strong>
            <input type="text" name="jdistrict" onChange={handleChangejob} />
          </div>
        </div>
        
        <h1 className='headinginternship'>Experience</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              How many year of experience:-
            </strong>
            <input type="Phone" name="jexperience" onChange={handleChangejob}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Role:-
            </strong>
            <input type="text" name="jerole" onChange={handleChangejob} />
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Company Name:-
            </strong>
            <input type="Phone" name="jcompany"  onChange={handleChangejob}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Job Location:-
            </strong>
            <input type="text" name="jlocation" onChange={handleChangejob} />
          </div>
        </div>
        <div className='row d-flex p-4'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Resume:-
            </strong>
            <input type="file" name="jresume" onChange={handleChangejob} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Cover Letter:-
            </strong>
            <input type="file" name="jletter" onChange={handleChangejob}/>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Current Address:-
            </strong>
            <textarea name="jcurrent" onChange={handleChangejob}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>
              Enter your Parmanent Address:-
            </strong>
            <textarea  name="jparmanent" onChange={handleChangejob}/>
          </div>
        </div>
        <button onClick={handlejobdata}>submit</button>
      </div>
      )}

     
    {/* </div> */}

    </div>
  );
};

export default Home;
