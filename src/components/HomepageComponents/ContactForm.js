import React from 'react';

function ContactForm() {
  return (
    <div  className='mt-5 pt-3 '>
    <h1  className="text-5xl text-center font-bold d-flex justify-content-center">
          <span className="color-p">Contact</span>✨<span className="color-b">Me</span>
        </h1>
        {/* Contact Form */}
    <section id="contact" className="container my-5 d-flex justify-content-center text-white ">
      <div className="container  m-3 bg-cornflowerblue border-4 border-darkcyan d-flex justify-content-center">
        <form
          className="m-5 text-darkpurple"
          action="https://formspree.io/f/xrgngdlq"
          method="POST"
          data-success="Thank you for your submission!"
        >
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="That's ..." required />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="You! ..." />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="cname">Company Name</label>
              <input type="text" id="cname" name="companyname" placeholder="Company ..." />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="E-mail ..." required />
            </div>
          </div>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Drop me a line, let's Connect! ..." />
          <input className="form-btn btn btn-primary mt-3 ml-1" type="submit" value="Submit" />
        </form>
      </div>
    </section></div>
  );
}

export default ContactForm;
