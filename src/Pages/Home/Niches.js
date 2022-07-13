import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Niches = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl mt-9 mb-9  text-blue-700'>List of Niches We Currently Offer</h1>
            </div>
            <div className='justify-center justify-items-center mt-9 mb-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div class="card w-96  text-primary-content">
  <div class="card-body text-left text-black">
   
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Automotive </p>
    
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Arts and Entertainment</p>
    
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Business Products & Services </p>
    
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Career Services</p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Clothing & Fashion</p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> E-commerce </p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Education </p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Engineering </p>
    <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Finance </p>
    
    
  </div>
</div>
            <div class="card w-96  text-primary-content">
  <div class="card-body text-left text-black">
    
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Food & Culinary </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Gambling </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Health and Fitness </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Health Care & Medical </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Home and Gardening </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Home Services </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Insurance </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Legal </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Lifestyle </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Linguistics </p>
    
  </div>
</div>
            <div class="card w-96  text-primary-content">
  <div class="card-body text-left text-black">
   
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Make Money Online </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Marketing </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Parenting </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Personal Finance </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Pets & Animals </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Real Estate </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Sports and Athletics </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Technology </p>
  <p> <FontAwesomeIcon icon={faCircleCheck}  color="blue"/> Travel </p>
    
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Niches;