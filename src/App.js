import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Covid from './components/Covid/Covid';
import MusicGeneration from './components/MusicGeneration/MusicGeneration';
import SentimentAnalysis from './components/SentimentAnalysis/SentimentAnalysis';
import "./App.css";


function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Route path = "/" exact component = {HomePage} />
                <Route path = "/covid" exact component = {Covid} />
                <Route path = "/musicgeneration" exact component = {MusicGeneration} />
                <Route path = "/sentimentanalysis" exact component = {SentimentAnalysis} />
            </BrowserRouter>

        </Fragment>
    )
}

export default App
