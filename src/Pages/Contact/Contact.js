import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';








const Contact = () => {
    return (
        <div className=' mb-80'>
            <div>
                
            <h2 className='mt-40 text-5xl text-blue-700'> Let's get touch in</h2> 
                
                </div>

         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10'>
            <div className='mt-10 mb-20' >
<h2 className=''><FontAwesomeIcon icon={ faPhone}  size="2x"  color='blue' /></h2>
<p>phone</p>
<p>+8801796582245</p>
            </div>

            <div className='mt-10 mb-20' >
<h2 className=''><FontAwesomeIcon icon={ faEnvelope}  size="2x"  color='blue'/></h2>
<p>Email</p>
<p>writerskernel@gmail.com</p>
            </div>

            <div className='mt-10 mb-20'>
            

     <h2 className='text-center'><FontAwesomeIcon icon={ faThumbsUp}  size="2x" color='blue' /></h2>
     

    <p><a target='_blank' >Social</a></p>

    <p><a target='_blank' href='https://web.facebook.com/writerskernel'>FaceBook</a></p>


            </div>

         </div>
        </div>
    );
};

export default Contact;