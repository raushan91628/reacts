import React, { useState } from 'react';

interface ContactForm {
  cname: string;
  cemail: string;
  cmessage: string;
}

const ContactUs: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    cname: '',
    cemail: '',
    cmessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Save each field individually to local storage
    localStorage.setItem('cname', contactForm.cname);
    localStorage.setItem('cemail', contactForm.cemail);
    localStorage.setItem('cmessage', contactForm.cmessage);

    alert('Your response has been submitted successfully! Please wait while the admin checks.');
  };

  return (
    <div className='contactform'>
      <form className='contact' onSubmit={submit}>
        <h1 className='contact-heading'>Contact List</h1>
        <label>Name:</label>
        <input type="text" name="cname" value={contactForm.cname} onChange={handleChange} />

        <label>Email:</label>
        <input type="text" name="cemail" value={contactForm.cemail} onChange={handleChange} />

        <label>Message:</label>
        <textarea name="cmessage" value={contactForm.cmessage} onChange={handleChange} />

        <button type="submit" className='contactsubmitbutton col-4'>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
