import React from 'react';

const OutputPage = ({ name, gender, age, bmi, category, onGoBack }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your BMI Result</h2>
            <div className="p-4 shadow rounded bg-light">
                <h4>Name: <span>{name}</span></h4>
                <h4>Gender: <span>{gender}</span></h4>
                <h4>Age: <span>{age}</span></h4>
                <h4>Your BMI: <span>{bmi}</span>   kg/m2 </h4>
                <p>Category: {category}</p>
                <button className="btn btn-secondary btn-block mt-4" onClick={onGoBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default OutputPage;
