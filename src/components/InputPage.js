import React, { useState } from 'react';

const InputPage = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && gender && age && weight && height) {
            onSubmit({ name, gender, age, weight, height });
        } else {
            alert('Please enter all the required fields.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ color:'white', }}>BMI CALCULATOR</h2>
            <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height (cm)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter your height"
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">
                    Calculate BMI
                </button>
            </form>
        </div>
    );
};

export default InputPage;
