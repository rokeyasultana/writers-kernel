import React from 'react';
import Banner from './Banner';
import Flag from './Flag';
import Card from './Card'
import Services from './Services';
import Testimonials from './Testimonials';
import IncludedService from './IncludedService';
import Faq from './Faq';
import Company from './Company';
import Niches from './Niches';



const Home = () => {
    return (
        <div>

        <Banner></Banner>
        <Flag></Flag>
        <Card></Card>
        <Services></Services>
        <Testimonials></Testimonials>
        <IncludedService></IncludedService>
        <Faq></Faq>
        <Company></Company>
        <Niches></Niches>
     
       
        </div>
    );
};

export default Home;