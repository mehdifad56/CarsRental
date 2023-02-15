import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import GalleryOne from "./GalleryOne";
import Slider from "react-slick";
import ContactForm from '../contact/ContactForm';
import ImageGallery from 'react-image-gallery';
import styles from './Gallery.module.scss'
import Formulaire from './Formulaire';
import Car1 from './images/benbtayga_1.jpg'
import Car2 from './images/bentayga_2.jpg'
import Car3 from './images/bentayga_3.jpg'
import Pricing from '../pricing/Pricing';
import PricingFive from '../pricing/PricingFive';
import PricingFour from '../pricing/PricingFour';
import PricingThree from '../pricing/PricingThree';

const PopupData2 = [
    {
        original: Car1,
        thumbnail: Car1,
    },
    {
        original: Car2,
        thumbnail: Car2,
    },
    {
        original: Car3,
        thumbnail: Car3,
    }
]

const Elements = ({props}) => {
    return (
        <>
            <SEO title="Gallery || CARS RENTAL PARIS - React Business  Template" />
            <Layout>
                <div className="main-content">
                
                    <div className="rwt-gallery-area rn-section-gapBottom">
                        <div>

                            <div  >
                            <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    // subtitle="Bentley Bentayga"
                                    title="Bentley Bentayga"
                                    description=""
                                />
                            </div>
                        </div>
                                <ImageGallery items={PopupData2} />
                            </div>
                            {/* <div style={{ width: '30%', marginLeft: '10%' }}>
                                <Formulaire/>
                            </div> */}
                           
                        </div>
                    </div>
                    {/* End Elements Area  */}




                    {/* <Pricingt/> */}
                </div>
            </Layout>
        </>
    )
}
export default Elements;