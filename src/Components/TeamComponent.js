import React from "react";

export const TeamComponent = () => (
  <div class="container pt-5 team">
    <div class="d-flex flex-column text-center mb-5">
      <h4 class="text-primary font-weight-bold">Our Trainers</h4>
      <h4 class="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
    </div>
    <div class="row">
      <TeamItem image={require("../img/team-1.jpg")} />
      <TeamItem image={require("../img/team-3.jpg")} />
      <TeamItem image={require("../img/team-4.jpg")} />
      <TeamItem image={require("../img/team-1.jpg")} />
    </div>
  </div>
);

export const TeamItem = ({image}) => (
  <div class="col-lg-3 col-md-6 mb-5">
    <div class="card border-0 bg-secondary text-center text-white">
      <img class="card-img-top" src={image} alt="" />
      <div class="card-social d-flex align-items-center justify-content-center">
        <div>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 40, height: 40 }}
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 40, height: 40 }}
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 40, height: 40 }}
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 40, height: 40 }}
            href="#"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div class="card-body bg-secondary">
        <h4 class="card-title text-primary">Trainer Name</h4>
        <p class="card-text">Trainer</p>
      </div>
    </div>
  </div>
);
