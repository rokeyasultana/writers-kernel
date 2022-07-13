import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const IncludedService = () => {
    return (
        <div className='mt-10
        mb-15'>
           <h1 className='text-4xl  text-blue-700'>Our Website Content Writing Services Includes</h1> 
           <div class="  ">
  <div class="card-body mt-9 ">
      
  <div className='text-left  mt-2 ml-20  '>
           <p className='mt-2'> <FontAwesomeIcon icon={faCircleCheck}  color='blue'  /> Writing articles: for your blogs, your showcases, your e-commerce sites, etc…</p>
            <p className='mt-2'> <FontAwesomeIcon icon={faCircleCheck}  color='blue' /> Product review article writing: for amazon affiliate sites.</p>
            <p className='mt-2'> <FontAwesomeIcon icon={faCircleCheck}  color='blue'  /> E-commerce product description writing services.</p>
            <p className='mt-2'> <FontAwesomeIcon icon={faCircleCheck}  color="blue"  /> Professional English proofreading: for affiliate articles, book, journal, articles, blog post, eBooks.</p>
            <p className='mt-2'> <FontAwesomeIcon icon={faCircleCheck}  color="blue"  /> Article rewriting services</p>
           
         
         
           </div>
   
    
  </div>
</div>
          
        </div>
    );
};

export default IncludedService;