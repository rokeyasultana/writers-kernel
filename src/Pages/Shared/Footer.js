import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
           <footer class="footer p-10 bg-blue-600 text-base-content justify-center gap-24">
  <div>
   
    <p className='text-2xl text-white '>We’d love to hear from you! <br></br>Please feel free to get in touch <br></br> with us using the live chat box <br></br>or the contact form.</p>
  </div> 
  
  <div className='text-white'>
     
    <p class=" ">Contact us</p> 
    <p class="">Customer Service number :+8801796582245</p> 
    <p class="">Email Address : writerskernel@gmail.com</p>
  </div> 

 <div className='text-white'>
  <p>Social </p>
  <a target='_blank' href='https://web.facebook.com/writerskernel?_rdc=1&_rdr'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
 </div>
</footer>
        </div>
    );
};

export default Footer;