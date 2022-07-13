import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Niches = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl mt-10 mb-10 font-bold'>List of Niches We Currently Offer</h1>
            </div>
            <div className='justify-center justify-items-center mt-9 mb-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div class="card w-96  text-primary-content">
  <div class="card-body text-left text-black">
   
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Automotive </p>
    
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Arts and Entertainment</p>
    
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Business Products & Services </p>
    
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Career Services</p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Clothing & Fashion</p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> E-commerce </p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Education </p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Engineering </p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Finance </p>
    
    
  </div>
</div>
            <div class="card w-96  text-primary-content">
  <div class="card-body text-left text-black">
    
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Food & Culinary </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Gambling </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Health and Fitness </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Health Care & Medical </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Home and Gardening </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Home Services </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Insurance </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Legal </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Lifestyle </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Linguistics </p>
    
  </div>
</div>
            <div class="card w-96  text-primary-content">
  <div class="card-body text-left text-black">
   
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Make Money Online </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Marketing </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Parenting </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Personal Finance </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Pets & Animals </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Real Estate </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Sports and Athletics </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Technology </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  size=""/> Travel </p>
    
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Niches;