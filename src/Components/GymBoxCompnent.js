import React from 'react';

export const GymBoxComponent = (props) => (
    <div className="container gym-class mb-5 mt-5">
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i className="flaticon-bodybuilding"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>
);
