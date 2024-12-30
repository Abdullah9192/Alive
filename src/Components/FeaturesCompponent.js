import React from 'react';

export const FeaturesComponent = ({heading,disc,extraClasses}) => (
    <div className="col-lg-4 p-0">
        <div className={`d-flex align-items-center  text-white px-5 ${extraClasses}`}style={{ minHeight: '300px' }}>
            <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
            <div>
                <h2 className="text-white mb-3">{heading}</h2>
                <p>{disc}</p>
            </div>
        </div>
    </div>
);
