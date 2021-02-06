import React, { useState } from 'react';
import axios from 'axios';


function Prediction() {
   


    const [selectedFile, changeSelectedFile] = useState(null);
    const [heatmapPath, changeHeatMapPath] = useState("http://localhost:8000/media/covid/heatmap.jpg");

    function fileSelectHandler(event){
        changeSelectedFile(event.target.files[0]);
    }



    const fileUploadHandler = async (event) => {
        const fd = new FormData();
        fd.append("image", selectedFile)
        const response = await axios.post("http://localhost:8000/covid/", fd);
        document.getElementById("heatmap-img").style.display = "flex";
        const out = response.data;
        document.getElementById("pred-result").innerHTML = out.message;
        changeHeatMapPath("http://localhost:8000/media/covid/heatmap.jpg?time=" + new Date().getTime());

    }

    return (
        <div>
            <section className="module parallax parallax-1"></section>
            <h1 id = "heading">Covid - 19 Prediction</h1>
            <p id = "main">A CNN based Neural network is trained which take x-ray images to predict the patient as corona virus positive or negative.</p>
            <div id = "file-input">
                <input type = "file" onChange = {fileSelectHandler}></input>
                <button className = "positive large ui button" id = "predict-button" onClick = {fileUploadHandler}>Predict</button>
            </div>
            <div id = "result-div">
                <h3 id = "pred-result"></h3>
            </div>
            <div id = "heatmap-img">
                <img id = "heatmap-img-img" src = {heatmapPath} alt = "heatmap"></img>
            </div>
            <section className="module parallax parallax-2"></section>
        </div>
    )
}

export default Prediction;
