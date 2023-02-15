import React from 'react'
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import HeaderTwo from '../common/header/HeaderTwo';
import FooterFour from '../common/footer/FooterFour';

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import ServiceFive from '../elements/service/ServiceFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import HeaderOne from '../common/header/HeaderOne';
import CarImage from '../components/blog/itemProp/images/bentayga_2.jpg'
var BlogListData = BlogClassicData.slice(0,6 );



const BannerData = [
    {
        image: "/images/bg/bg-image-6.jpg",
        title: "Digital Agency.",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-14.jpg",
        title: "Creative Agency.",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-15.jpg",
        title: "Startup Agency.",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
]

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
}, ]
const DigitalAgency = () => {
    return (
        <>
            <SEO title="Digital Agency" />
            <main className="page-wrapper">

                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation} >
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg-overlay bg_image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-7">
                                            <div className="inner text-start">
                                                {/* <h1 style={{marginBottom:'50px'}}  className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h1> */}
                                                {/* <p className="description" dangerouslySetInnerHTML={{ __html: data.description }}></p> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* End Slider Area  */}
                <Separator />
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="About Our Company."
                                    title="Nos Services"
                                    description="Vous souhaitez prendre le volant d'un véhicule de luxe lors d'un week-end, d'un voyage d'affaires ou sans raison particulière ? Optez pour la location de voitures de luxe avec nos bureaux à Paris, Cannes, Monaco et Nice."
                                />
                            </div>
                        </div>
                        <ServiceFive
                            serviceStyle="gallery-style"
                            textAlign="text-start"
                        />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="NOTRE SÉLECTION POUR VOUS"
                                    title="LES COUPS DE COEUR DE NOS CLIENTS"
                                    description="Une excellente expérience à la prise en charge et au retour du véhicule
                                    "
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {CarsInfo.map((item,index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-12 mt--30">
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
export default DigitalAgency;