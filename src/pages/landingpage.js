import React from "react";
import Education from "../components/education";
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import Qualifications from "../components/qualification";
import Services from "../components/services";
import Skills from "../components/skills";
import Work from '../components/work';
import {Routes, Route } from 'react-router-dom'
import Portfolio from "../components/portfolio";
import Cta from "../components/cta";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Footer from "../components/footer";


export default function LandingPage() {
    const landP= {
        position:'relative',
        overflow:'hidden',
    }
    return (
        <div
            style={landP}>
            <Navbar/>
            <Hero/>
           <Skills/> 
           <Qualifications/>
           <Routes>
                <Route index element={<Education/>} />

                <Route 
                path="education" 
                element={<Education/>} >
                </Route>

                <Route 
                path="work" 
                element={<Work/>} >
                </Route>
                
            </Routes>
           <Services/>
           <Portfolio/>
           <Cta/>
           <Testimonial/>
           <Contact/>
           <Footer/>
           
        </div>
    )
}