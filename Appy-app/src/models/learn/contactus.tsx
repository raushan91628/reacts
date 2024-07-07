import React,{useState} from 'react';
// import myImage from '../image/aboutUsImage.jpg'

const About: React.FC = () => {
    const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [isdataFormVisible, setIsdataFormVisible] = useState<boolean>(false);
//date section
const today = new Date();
const formattedDate = today.toDateString();
const viewformdata=()=>
    {
        setIsEditFormVisible(prevState => !prevState);
    }
    const viewdataformdata=()=>
        {
            setIsdataFormVisible(prevState => !prevState);
        }
    const formdata=()=>
        {
            setIsFormVisible(prevState => !prevState);
        }
    const email = localStorage.getItem('cemail');
    const godataonmail=()=>
        {
            window.location.href = `mailto:${email}`;
        }



  return (
    <div className='contactus'>
        <div className='datalistintern'>
        <strong>Date</strong>
        <strong><b>Name</b></strong>
        <strong><b>Email</b></strong>
        <strong><b>Action</b></strong>
        </div>
        <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('cname')}</strong>
        <strong> {localStorage.getItem('cemail')}</strong>
        <strong><button onClick={viewformdata} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewcontactdetail'>
              <strong><button onClick={viewformdata} className='editcross-button'>X</button></strong>
              <h1 className='text-center'><b>Contact Detail</b></h1><hr></hr>
            <strong><b>Name:-</b>{localStorage.getItem('cname')}</strong>
            <strong><b>Email:-</b>{localStorage.getItem('cemail')}</strong>
            <strong><b>Message:-</b>{localStorage.getItem('cmessage')}</strong>
            <button className='reply-users col-3' onClick={godataonmail}>Reply </button>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('cname')}</strong>
        <strong> {localStorage.getItem('cemail')}</strong>
        <strong><button onClick={viewdataformdata} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isdataFormVisible && (
        <div className='viewcontactdetail'>
              <strong><button onClick={viewformdata} className='editcross-button'>X</button></strong>
              <h1 className='text-center'><b>Contact Detail</b></h1><hr></hr>
            <strong><b>Name:-</b>{localStorage.getItem('cname')}</strong>
            <strong><b>Email:-</b>{localStorage.getItem('cemail')}</strong>
            <strong><b>Message:-</b>{localStorage.getItem('cmessage')}</strong>
            <button className='reply-users col-3' onClick={godataonmail}>Reply </button>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>Tue Jun 11 2024</p>
        <strong> {localStorage.getItem('cname')}</strong>
        <strong> {localStorage.getItem('cemail')}</strong>
        <strong><button onClick={formdata} className='view-job-applcation-detail'>view</button></strong>
        </div>
        {isFormVisible && (
        <div className='viewcontactdetail'>
              <strong><button onClick={viewformdata} className='editcross-button'>X</button></strong>
              <h1 className='text-center'><b>Contact Detail</b></h1><hr></hr>
            <strong><b>Name:-</b>{localStorage.getItem('cname')}</strong>
            <strong><b>Email:-</b>{localStorage.getItem('cemail')}</strong>
            <strong><b>Message:-</b>{localStorage.getItem('cmessage')}</strong>
            <button className='reply-users col-3' onClick={godataonmail}>Reply </button>
        </div>
        )}
        {/* <div>
            <p></p>
            <input type="file"/>
        </div> */}
    </div>
  );
};

export default About;
