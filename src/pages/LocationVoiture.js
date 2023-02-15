import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import FooterThree from '../common/footer/FooterThree';


import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ServiceFour from '../elements/service/ServiceFour';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandTwo from '../elements/brand/BrandTwo';

import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import BlogList from '../components/blog/itemProp/BlogList';
import FooterFour from '../common/footer/FooterFour';
import BlogClassicData from '../data/blog/BlogList.json';
import HeaderTwo from '../common/header/HeaderTwo';
import CarImage from '../components/blog/itemProp/images/bentayga_2.jpg'
const LocationVoiture = () => {
    const handleClick = (myLink) => () => {
        window.location.href=myLink;
      }
      const CarsInfo = [{
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: CarImage
    }]
    return (
        <>
            <main className="page-wrapper">
            <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="NOTRE SÉLECTION POUR VOUS"
                                    // title="Cars Rental Paris vous propose une gamme très large de supercars, cabriolets et SUV de prestige à louer."
                                    // description="Une excellente expérience à la prise en charge et au retour du véhicule
                                    // "
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {CarsInfo.map((item,index) => (
                                <div  key={index} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterFour />

            </main>
        </>
    )
}

export default LocationVoiture;
