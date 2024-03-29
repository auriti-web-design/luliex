import * as React from 'react';
import Hero from "@/components/Landing/components/Hero";
import TrdSection from "@/components/Landing/components/TrdSection";
import ScSection from "@/components/Landing/components/ScSection";
import MainSection from "@/components/Landing/components/Main";
import ImgGrid from "@/components/Landing/components/ImgGrid";
import CTA from "@/components/Landing/components/CTA";
import VilleDiLusso from "@/components/Landing/components/VilleDiLusso";
import Hotel from './components/Hotel';
import Resort from './components/Resort';
import Cantine from './components/Cantine';
import Dimore from './components/Dimore';
import Chalet from './components/Chalet';


export default function Landing() {
    return (
        <>
            {/* Hero Section */}
            <Hero/>
            {/* Main Section */}
            <MainSection/>
            {/* Scd Section */}
            <ScSection/>
            {/*  Trd Section */}
            <TrdSection/>
            {/* Grid Section */}
            <ImgGrid/>
            {/* CTA */}
            <CTA/>
            {/* Ville di lusso */}
            <VilleDiLusso />

            <Hotel />

            <Resort />

            <Cantine />

            <Dimore />

            <Chalet />


        </>
    );
}
