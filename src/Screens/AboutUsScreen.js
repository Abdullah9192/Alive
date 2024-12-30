import React from "react";
import { Navabr } from "../Components/Navabr";
import { BannerComponent } from "../Components/BannerComponent";
import { FooterComponent } from "../Components/FooterComponent";
import { TeamComponent } from "../Components/TeamComponent";
import { FeaturesComponent } from "../Components/FeaturesCompponent";
import { SubPageBanner } from "../Components/SubPageBanner";

export const AboutUsScreen = () => (
  <div>
    <Navabr />
    <SubPageBanner title={"About Us"}/>
    <BannerComponent />
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
    <TeamComponent />
    <FooterComponent />
  </div>
);



