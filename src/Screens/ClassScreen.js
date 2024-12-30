import React from "react";
import { Navabr } from "../Components/Navabr";
import { FooterComponent } from "../Components/FooterComponent";
import { SubPageBanner } from "../Components/SubPageBanner";
import { GymBoxComponent } from "../Components/GymBoxCompnent";
import { CalenderComponent } from "../Components/CalenderComponent";

export const ClassScreen = () => {
  return (
    <div>
      <Navabr />
      <SubPageBanner title={"Classes"} />
      <GymBoxComponent />
      <CalenderComponent />
      <FooterComponent />
    </div>
  );
};
