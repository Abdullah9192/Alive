import React from 'react'
import { Navabr } from '../Components/Navabr'
import { FooterComponent } from '../Components/FooterComponent'
import { SubPageBanner } from '../Components/SubPageBanner'
import { FeatureComponent } from '../Components/FeatureComponent'
import { TestimonialComponent } from '../Components/TestimonialComponent'

export const FeaturesScreen = () => {
  return (
    <div>
        <Navabr/>
        <SubPageBanner title={"Features"}/>
        <div className="container feature pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
                <h4 className="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
            </div>
            <div className="row">
                <FeatureComponent img={require('../img/feature-3.jpg')} title={"Videos Instruction"} disc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"}/>
                <FeatureComponent img={require('../img/feature-1.jpg')} title={"Training Calendar"} disc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"}/>
                <FeatureComponent img={require('../img/feature-1.jpg')} title={"Free Apps & WiFi"} disc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"}/>
                <FeatureComponent img={require('../img/feature-1.jpg')} title={"Community Support"} disc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"}/>
            </div>
        </div>
        <TestimonialComponent/>
        <FooterComponent/>
    </div>
  )
}
