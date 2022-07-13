import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div className='mb-80'>
            <div>
                <h2 className='text-5xl text-red-700 mt-8 font-bold '>Page Not Found</h2>
                <h2 className='text-5xl text-center text-red-700 mt-12 font-bold'> 404</h2>
          <h2 className='text-center mt-9'><FontAwesomeIcon icon={ faFaceFrownOpen}  size="9x"  color='red' /></h2>
            </div>
        </div>
    );
};

export default NotFound;