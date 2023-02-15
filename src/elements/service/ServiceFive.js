import React from 'react';
import {Link} from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ServiceList = [
    {
        image: '/images/service/galery-image-01.png',
        title: 'LOCATION DE VOITURES LUXUEUSES',
        description: 'Cars Rental Paris vous propose une gamme très large de supercars, cabriolets et SUV de prestige à louer.',
        Link:'/Location-Voiture'
    },
    {
        image: '/images/service/galery-image-02.png',
        title: 'LOCATION AVEC CHAUFFEUR',
        description: 'Cars Rental Paris propose une large gamme de services de limousine avec chauffeur pour répondre à vos besoins.'
    },
    {
        image: '/images/service/galery-image-03.png',
        title: 'TRANSFERT AVEC CHAUFFEUR',
        description: 'Cars Rental Paris offre un service de transfert de qualité avec des limousines et des mini-fourgonnettes.'
    }
]
const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div style={{cursor:'pointer'}} onClick={handleClick(val.Link?val.Link:'')} className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <AnimationOnScroll 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to={val.Link?val.Link:''} dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;