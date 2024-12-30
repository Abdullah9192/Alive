import React from "react";
import { Navabr } from "../Components/Navabr";
import { CarouselComponent } from "../Components/CrousalComponent";
import { GymBoxComponent } from "../Components/GymBoxCompnent";
import { FeaturesComponent } from "../Components/FeaturesCompponent";
import { BannerComponent } from "../Components/BannerComponent";
import { FeatureComponent } from "../Components/FeatureComponent";
import { FooterComponent } from "../Components/FooterComponent";
import { BlogComponent } from "../Components/BlogComponent";
import { TestimonialComponent } from "../Components/TestimonialComponent";
import { TeamComponent } from "../Components/TeamComponent";
import { BMICalculation } from "../Components/BMICalculation";
import { CalenderComponent } from "../Components/CalenderComponent";

const HomeScreen = (props) => (
  <div style={{ height: "100vh" }}>
    <Navabr />
    <CarouselComponent />
    <BannerComponent />
    <GymBoxComponent />
    <div className="container-fluid my-5">
      <div className="row">
        <FeaturesComponent
          extraClasses={"bg-secondary"}
          heading={"Progression"}
          disc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero"
          }
        />
        <FeaturesComponent
          extraClasses={"bg-primary"}
          heading={"Workout"}
          disc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero"
          }
        />
        <FeaturesComponent
          extraClasses={"bg-secondary"}
          heading={"Nutrition"}
          disc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero"
          }
        />
      </div>
    </div>
    <div className="container feature pt-5">
      <div className="d-flex flex-column text-center mb-5">
        <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
        <h4 className="display-4 font-weight-bold">
          Benifits of Joining Our GYM
        </h4>
      </div>
      <div className="row">
        <FeatureComponent
          img={require("../img/feature-3.jpg")}
          title={"Videos Instruction"}
          disc={
            "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"
          }
        />
        <FeatureComponent
          img={require("../img/feature-1.jpg")}
          title={"Training Calendar"}
          disc={
            "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"
          }
        />
        <FeatureComponent
          img={require("../img/feature-1.jpg")}
          title={"Free Apps & WiFi"}
          disc={
            "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"
          }
        />
        <FeatureComponent
          img={require("../img/feature-4.jpg")}
          title={"Community Support"}
          disc={
            "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor"
          }
        />
      </div>
    </div>
    <div className="subscribe container-fluid my-5 py-5 text-center">
      <h4 className="display-4 text-white font-weight-bold mt-5 mb-3">
        Subscribe Our Newsletter
      </h4>
      <p className="text-white mb-4">
        Subscribe and get Our latest article in your inbox
      </p>
      <form className="form-inline justify-content-center mb-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control-lg"
            placeholder="Your Email"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
    <BMICalculation />
    <CalenderComponent />
    <TeamComponent />
    <TestimonialComponent />
    <BlogComponent />
    <FooterComponent />
  </div>
);

export default HomeScreen;
