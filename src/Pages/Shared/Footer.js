import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
          <footer class="footer footer-center p-10 bg-blue-700 text-primary-content">
  <div>
   
    <p class="font-bold text-white">
    We’d love to hear from you!<br></br> Please feel free to get in touch with us <br></br> using the live chat box or the contact form.
    </p> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
     
     <Link to="/contact">Contact us for more information</Link>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;