import React from 'react';

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-slate-500 to-slate-800 p-6 text-white'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Contact Us</h1>
        <div className='flex flex-col md:flex-row'>
          {/* Contact Information */}
          <div className='md:w-1/2 p-4'>
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
            <p className='mb-4'>
              We are here to assist you with any inquiries or concerns you may have. Please feel free to reach out to us through the following contact details:
            </p>
            <ul className='space-y-2'>
              <li>
                <strong>Phone:</strong> (123) 456-7890
              </li>
              <li>
                <strong>Email:</strong> contact@hospital.com
              </li>
              <li>
                <strong>Address:</strong> 123 Health St., Wellness City, HC 12345
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className='md:w-1/2 p-4'>
            <h2 className='text-2xl font-semibold mb-4'>Contact Form</h2>
            <form className='space-y-4'>
              <div>
                <label className='block mb-2' htmlFor='name'>Name</label>
                <input 
                  type='text' 
                  id='name' 
                  className='w-full p-2 rounded-md text-black' 
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label className='block mb-2' htmlFor='email'>Email</label>
                <input 
                  type='email' 
                  id='email' 
                  className='w-full p-2 rounded-md text-black' 
                  placeholder='Your Email'
                />
              </div>
              <div>
                <label className='block mb-2' htmlFor='message'>Message</label>
                <textarea 
                  id='message' 
                  className='w-full p-2 rounded-md text-black' 
                  rows='4' 
                  placeholder='Your Message'
                ></textarea>
              </div>
              <button 
                type='submit' 
                className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
