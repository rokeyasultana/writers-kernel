import React from 'react';
import'./Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div>
            <div>
<h2 className='text-center text-4xl font-bold mt-24 mb-24'>Our Prices for Content Writing Services</h2>
            </div>

<div>
   
</div>
            <div className= 'justify-center justify-items-center grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-1 gap-9 '>

            <div id='amazon' class="card_service w-50 bg-blue-200 shadow-xl rounded-2xl   ">
  <div class="card_service-body ">
    <h2  class="text-center mt-4 text-2xl font-bold ">Amazon Product Review Content</h2>

    <h2 className='mt-2  mb-4'> <FontAwesomeIcon icon={ faDollar}  size="x" color='' /> <span className='text-4xl font-bold'> 14 </span>
<small>Per 1000 words</small> </h2>

<p className='mt-2'>Focus Keywords 5</p>
<p className='mt-2'>SEO Optimized</p>
<p className='mt-2'>Well Researched Plagiarism-free Unique Content</p>
<p className='mt-2'>Expert Proofread</p>
<p className='mt-2'>Copyscape Passed</p>
<p className='mt-2'>Top-Notch Support</p>
<p className='mt-2'>Delivery Time 2 – 3 Days</p>
<div class="card-actions justify-center mt-5">
<button class="btn rounded-full  btn-outline hover:outline-2 ">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2 red"> <FontAwesomeIcon icon={ faShoppingCart}  size="x"  /> Order Now</button>
    </div>
  </div>
</div>

<div class="card_service w-50 bg-blue-200 shadow-xl rounded-2xl ">
  <div class="card_service-body">
    <h2 class="text-center mt-4 text-2xl font-bold ">Informative Articles for Adsense Blogs, Guest Posts & Web 2.0</h2>

    <h2 className='  mt-2 mb-4'> <FontAwesomeIcon icon={ faDollar}  size="x" color='' /> <span className='text-4xl font-bold'> 14 </span>
<small>Per 1000 words</small> </h2>

    <p className='mt-2'></p>
<p className='mt-2'>SEO Optimized</p>
<p className='mt-2'>Plagiarism-free Unique Content</p>
<p className='mt-2'>Expert Proofread</p>
<p className='mt-2'>Top-Notch Support</p>
<p className='mt-2'>Copyscape Passed</p>
<p className='mt-2'>Delivery Time 2 – 3 Days</p>
<div class="card-actions justify-center mt-5">
<button class="btn rounded-full  btn-outline hover:outline-2 ">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2 red"> <FontAwesomeIcon icon={ faShoppingCart}  size="x"  /> Order Now</button>
    </div>
  </div>
</div>


<div class="card_service w-50 bg-blue-200 shadow-xl rounded-2xl  ">
  <div class="card_service-body ">
  <h2 class="text-center mt-4 text-2xl font-bold">Technical Informative/ IT/ Medical/ Engineering/ Service Related Content</h2>

  <h2 className='  mt-2 mb-4'> <FontAwesomeIcon icon={ faDollar}  size="x" color='' /> <span className='text-4xl font-bold'> 14 </span>
<small>Per 1000 words</small> </h2>
<p className='mt-2'>SEO Optimized</p>
<p className='mt-2'>Plagiarism-free Unique Content</p>
<p className='mt-2'>Expert Proofread</p>
<p className='mt-2'>Expert Technical Writer</p>
<p className='mt-2'>Top-Notch Support</p>
<p className='mt-2'>Delivery Time 2 – 3 Days</p>

    <div class="card-actions justify-center mt-5">
    <button class="btn rounded-full  btn-outline hover:outline-2 ">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2 red"> <FontAwesomeIcon icon={ faShoppingCart}  size="x"  /> Order Now</button>
    </div>
  </div>
</div>


<div class="card_service w-50 bg-blue-200 shadow-xl rounded-2xl">
  <div class="card_service-body">
    <h2 class="text-center mt-4 text-2xl font-bold">Case study, Web page writing, Landing Pages, Research based content</h2>

    <h2 className=' mt-2 mb-4'> <FontAwesomeIcon icon={ faDollar}  size="x" color='' /> <span className='text-4xl font-bold'> 25 </span>
<small>Per 1000 words</small> </h2>

<p className='mt-2'>Well Researched Plagiarism-free Unique Content</p>
<p className='mt-2'>Expert Proofread</p>
<p className='mt-2'>Customizable</p>
<p className='mt-2'>Top-Notch Support</p>
<p className='mt-2'>Delivery 3 – 4 Days</p>

    <div class="card-actions justify-center mt-5">
    <button class="btn rounded-full  btn-outline hover:outline-2 ">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2">CONTENT SAMPLE 1</button>
      <button class="btn rounded-full  btn-outline hover:outline-2 red"> <FontAwesomeIcon icon={ faShoppingCart}  size="x"  /> Order Now</button>
    </div>
  </div>
</div>
            </div>

        </div>
    );
};

export default Services;