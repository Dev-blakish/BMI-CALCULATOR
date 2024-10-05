import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
// import InputPage from './components/InputPage';
import InputPage from './components/InputPage';
import OutputPage from './components/OutputPage';

function App() {
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [userData, setUserData] = useState({});

    const calculateBMI = ({ name, gender, age, weight, height }) => {
        height = height / 100; // Convert height from cm to meters
        const calculatedBmi = (weight / (height * height)).toFixed(2);

        setUserData({ name, gender, age });
        setBmi(calculatedBmi);
        setCategory(getBMICategory(calculatedBmi));
        setShowResult(true);
    };

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
        if (bmi >= 25 && bmi < 29.9) return 'Overweight';
        return 'Obesity';
    };

    const handleGoBack = () => {
        setShowResult(false);
        setBmi(null);
        setCategory('');
        setUserData({});
    };

    return (
        <div className="App">
            {showResult ? (
                <OutputPage
                    name={userData.name}
                    gender={userData.gender}
                    age={userData.age}
                    bmi={bmi}
                    category={category}
                    onGoBack={handleGoBack}
                />
            ) : (
                <InputPage onSubmit={calculateBMI} />
            )}
        </div>
    );
}

export default App;
