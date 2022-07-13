import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const card = () => {
    return (
        <div >

            <h1 className='text-4xl text-blue-700  '>Why Choose Our Content Writing Services?</h1>

            <div className='justify-center justify-items-center mt-9 mb-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

            <div class="card w-96 bg-blue-700 text-primary-content">
  <div class="card-body">
    <p><FontAwesomeIcon icon={faCircleCheck}  size="3x"  /></p>
    <h2 class="text-2xl font-bold text-white">Top Quality content</h2>
    
  </div>
</div>
            <div class="card w-96 bg-blue-700  text-primary-content">
  <div class="card-body">
  <p><FontAwesomeIcon icon={faDollar
  }  size="3x"  /></p>
    <h2 class="text-2xl font-bold text-white">Reasonable Price</h2>
    
  </div>
</div>
            <div class="card w-96 bg-blue-700 text-primary-content">
  <div class="card-body">
<p>
  <FontAwesomeIcon icon={faChartLine
  }  size="3x" />
  </p>
    <h2 class="text-2xl font-bold text-white">SEO Optimized</h2>
   
  </div>
</div>
            <div class="card w-96 bg-blue-700  text-primary-content">
  <div class="card-body">
  <p><FontAwesomeIcon icon={faFilePen
  }  size="3x"  /></p>
    <h2 class="text-2xl font-bold text-white">Passionate Writers</h2>
    
  </div>
</div>
            <div class="card w-96 bg-blue-700 text-primary-content">
  <div class="card-body">
  <p><FontAwesomeIcon icon={faUserGroup
  }  size="3x"  /></p>
    <h2 class="text-2xl font-bold text-white">Customer Friendly</h2>
   
  </div>
</div>
            <div class="card w-96 bg-blue-700 text-primary-content">
  <div class="card-body">
  <p><FontAwesomeIcon icon={faPeopleCarryBox
  }  size="3x"  /></p>
    <h2 class=" text-2xl font-bold text-white">On-Time Delivery</h2>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default card;