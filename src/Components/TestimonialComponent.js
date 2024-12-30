import React from "react";
import { CarouselComponent } from "./CrousalComponent";
import { CaroussalItem } from "./Caroussaltem";

export const TestimonialComponent = () => (
  <div class="container-fluid position-relative testimonial my-5">
    <div class="container">
      <div class="row px-3 align-items-center">
        <div class="col-md-6 bg-secondary">
          <div
            className="d-flex align-items-center px-3"
            style={{ minHeight: 450 }}
          >
            <div id="carouselId" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselId"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <CaroussalItem status={"active"} image={require("../img/testimonial-1.jpg")} />
                <CaroussalItem image={require("../img/testimonial-2.jpg")} />
                <CaroussalItem image={require("../img/testimonial-3.jpg")} />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="pl-md-3 d-none d-md-block">
            <h4 class="text-primary">Testimonial</h4>
            <h4 class="display-4 mb-4 text-white font-weight-bold">
              What Our Clients Say?
            </h4>
            <p class="m-0 text-white">
              Vero elitr lorem magna justo magna justo at justo est ipsum sed
              clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor
              clita clita rebum kasd magna erat diam
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
