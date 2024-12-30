import React from 'react';

export const FeatureComponent = ({img,title,disc}) => (
    <div className="col-md-6 mb-5">
        <div className="row align-items-center">
            <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src={img} alt="Image"/>
                    
            </div>
            <div className="col-sm-7">
                <h4 className="font-weight-bold">{title}</h4>
                <p>{disc}</p>
            </div>
        </div>
    </div>
);
