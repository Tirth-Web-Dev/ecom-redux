import React from 'react';
import CategoriesGrid from '../components/CategoriesGrid';
import Hero from '../components/Hero';
import Benifits from '../components/Benifits';
import Newsletter from '../components/NewsLetter';

const Home = () => {
    return (
        <div>
            <Hero />
          <CategoriesGrid />
          <Benifits />
          <Newsletter />
        </div>
    );
};

export default Home;