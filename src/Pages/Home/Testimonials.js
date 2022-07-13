import React from 'react';

import './Testimonials.css'
const Testimonials = () => {
    return (
        <div className=''>
           
           <h1 className='text-4xl text-blue-700 text-center mt-9 '>Our Customer Testimonials</h1>
             <div className=''>
            <div >
            <div id='hover01' class="card w-50 mt-5 mb-10 mx-10 ">
  <figure><img style={{height:"600px"}} src="https://writerskernel.com/wp-content/uploads/2022/03/Testimonial.jpg" alt="" /></figure>
  <div class="card-body">
  </div>
</div>
             </div>
             
             <div id='hover02' >
             <div class="card w-50 mt-5  mx-10">
  <figure><img className='img' style={{height:"200px"}} src="https://writerskernel.com/wp-content/uploads/2021/03/ipiccy_image-1-1.jpg" alt="" /></figure>
  
</div>
             </div>
             
            </div>
        </div>
    );
};

export default Testimonials;