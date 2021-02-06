import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CovidApi() {

    const [totalCases, settotalCases] = useState(0);
    const [fatalCases, setfatalCases] = useState(0);
    const [recoveredCases, setrecoveredCases] = useState(0);

    const apiFunction = async () => {
        const response =  await axios.get("https://api.covid19api.com/summary");
        settotalCases(response.data['Global']['TotalConfirmed']);
        setrecoveredCases(response.data['Global']['TotalRecovered']);
        setfatalCases(response.data['Global']['TotalDeaths']);
    };

    useEffect(() => {
        apiFunction();
    });

    return (
        <div className = "ui three column centered grid">
            <div className = "column" id = "covid-icon-column">
                    <img id = "covid-icons" src = {require("./images/Corona.svg")} alt = "" />
            </div>

            <div className = "column">
                <img id = "covid-icons" src = {require("./images/Recovered.svg")} alt = "" />
            </div>

            <div className = "column">
                <img id = "covid-icons" src = {require("./images/Mask.svg")} alt = "" />
            </div>
            <div className = "column">
                <h1 id = "covid-text">Total cases</h1>    
            </div>
            <div className = "column">
                <h1 id = "covid-text">Fatal cases</h1>
            </div>
            <div className = "column">
                <h1 id = "covid-text">Recovered cases</h1>
            </div>
            <div className = "column">
                <h1 id = "covid-text">{totalCases}</h1>    
            </div>
            <div className = "column">
                <h1 id = "covid-text">{fatalCases}</h1>
            </div>
            <div className = "column">
                <h1 id = "covid-text">{recoveredCases}</h1>
            </div>
        </div>
    )
}

export default CovidApi;
