import React from 'react';
// import my from './image/';

const About: React.FC = () => {
  return (
    <div className='hrdashbord'>
      <div className='row d-flex'>
      <div className='divcol1 col-lg-4 col-md-12 col-sm-12'>
      <h1 className='dashbord-text-form-count'>Freshers</h1>
      <strong className='applicationcount'>1</strong>
      </div>
      <div className='divcol1 col-lg-4 col-md-12 col-sm-12'>
      <h1 className='dashbord-text-form-count'>Experience</h1>
      <strong className='applicationcount'>1</strong>
      </div>
      <div className='divcol1 col-lg-4 col-md-12 col-sm-12'>
      <h1 className='dashbord-text-form-count'>Total</h1>
      <strong className='applicationcount'>2</strong>
      </div>
      </div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/329/474/small_2x/dashboard-icon-style-free-vector.jpg" className='img-flud'/>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/329/474/small_2x/dashboard-icon-style-free-vector.jpg"  className='img-flud'/>
    </div>
  );
};

export default About;
