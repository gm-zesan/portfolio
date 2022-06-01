import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main class="content-3">
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
        </main>
    );
};

export default Home;