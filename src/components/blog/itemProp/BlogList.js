import React from 'react';
import { slugify } from "../../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Car from './images/download.jpg'
import Image from './images/bentayga_2.jpg'
const BlogList = ({ item, StyleVar }) => {
    const CarsInfo = [{
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: Image
    }, 
    {
        title: 'Bentley Bentayga',
        price: '3000$',
        year: '2022',
        transmition: 'automatique',
        fuel: 'essence',
        speed: '320km/h',
        image: Image
    },
    

    ]
    const handleClick = (myLink) => () => {
        window.location.href = myLink;
    }
    return (
        <div style={{ cursor: 'pointer' }} onClick={handleClick(`${process.env.PUBLIC_URL + "/gallery/"+ item.title}`)} className={`rn-card ${StyleVar}`}>
            <div className="inner">
                
                    
                   
                        <div className="thumbnail">
                            <img src={item.image} style={{ resizeMode: 'cover', width: '100%' }} alt="Image" />
                        </div>
                        <div className="content">
                            <h4 style={{ marginRight: 15 }}>
                                {item.title}
                            </h4>
                            <p style={{ fontSize: 14 }} >disponible a partir de <span style={{ color: 'red' }}>{item.price}</span> par jour</p>
                            <ul className="rn-meta-list" style={{ width: '100%', textAlign: 'center' }}>
                                <li>location de voiture</li>
                                <li className="separator">|</li>
                                <li>location de voiture</li>
                                <li className="separator">|</li>
                                <li className="last_li">location de voiture</li>
                            </ul>
                            <ul className="rn-meta-list" style={{ width: '100%', marginTop: 2 }}>
                                <li>{item.year}</li>
                                <li className="separator last_li"></li>
                                <li>{item.transmition}</li>
                                <li className="separator"></li>
                                <li>{item.fuel}</li>
                                <li className="separator"></li>
                                <li>{item.speed}</li>
                            </ul>
                        </div>
                    
                   

            

            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;
