
import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { CardLetters } from "./CardLetters";
import coverL_img from "./Images/coverletter_sample.png";
import resumeL_img from "./Images/resume_sample1.jpg";
import jobappl_img from "./Images/job_application.jpg";
import axios from "axios";

import { Images } from "./Images";

export const Home = () => {
  let navigate = useNavigate();

  const clicker = () => {
    console.log("clicked");
    navigate("/resume");
  };

  // const getImage = ()=>{
  //   axios.get('https://api.unsplash.com/search/photos?page=1&query=office&client_id=lNpsVvxPSbZm9bkhyfB547j9IibcvoVrWyTDARszbPA')
  //   .then((response)=>{

  //   })

  // }
  const [images, setImages] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=lNpsVvxPSbZm9bkhyfB547j9IibcvoVrWyTDARszbPA"
    );
    const data = response.data;
    console.log(data);
    setImages(data);
  };

  return (
    <>
      <div>
        {/* <button className=""image button type="button" data-bs-toggle="collapse" >Get imsge</button> */}
        <div className="d-flex flex-column">
          <div className="my-3 d-flex justify-content-center align-items-center">
            <img
              src="https://imgix.cosmicjs.com/19b6bfb0-97a0-11ea-a397-b51717da12c7-group-of-person-sitting-indoors-3184306.jpg"
              className="image"
            />
            {/* <div className="App">
            {images.length>0 && <Images className= "mysize"images={ images }/>}
            </div> */}

            <div className="container my-3 paddings margins">
              Ogni individuo ha diritto ad un ordine sociale e internazionale
              nel quale i diritti e le libertà enunciati in questa Dichiarazione
              possano essere pienamente realizzati. Nulla nella presente
              Dichiarazione può essere interpretato nel senso di implicare un
              diritto di un qualsiasi Stato, gruppo o persona di esercitare
              un'attività o di compiere un atto mirante alla distruzione di
              alcuno dei diritti e delle libertà in essa enunciati.Ogni
              individuo ha diritto ad un ordine sociale e internazionale nel
              quale i diritti e le libertà enunciati in questa Dichiarazione
              possano essere pienamente realizzati. Nulla nella presente
              Dichiarazione può essere interpretato nel senso di implicare un
              diritto di un qualsiasi Stato, gruppo o persona di esercitare
              un'attività o di compiere un atto mirante alla distruzione di
              alcuno dei diritti e delle libertà in essa enunciati.Ogni
              individuo ha diritto ad un ordine sociale e internazionale nel
              quale i diritti e le libertà enunciati in questa Dichiarazione
              possano essere pienamente realizzati. Nulla nella presente
              Dichiarazione può essere interpretato nel senso di implicare un
              diritto di un qualsiasi Stato, gruppo o persona di esercitare
              un'attività o di compiere un atto mirante alla distruzione di
              alcuno dei diritti e delle libertà in essa enunciati.Ogni
              individuo ha diritto ad un ordine sociale e internazionale nel
              quale i diritti e le libertà enunciati in questa Dichiarazione
              possano essere pienamente realizzati. Nulla nella presente
              Dichiarazione può essere interpretato nel senso d implicare un
              diritto di un qualsiasi Stato, gruppo o persona di esercitare
              un'att possano essere pienamente realizzati. Nulla nella presente
              Dichiarazione può essere interpretato nel senso di implicare un
              diritto di un qualsiasi Stato, gruppo o persona di esercitare
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between margin paddings">
            <Link to={"/coverletter"} className="a">
              <CardLetters
                title="Cover Letter Template"
                to="/resume"
                image={coverL_img}
              />
            </Link>
            <Link to={"/resumeletter"} className="a">
              <CardLetters title="Resume Template" image={resumeL_img} />
            </Link>
            <Link to={"/applicationletter"} className="a">
              <CardLetters
                title="Job Application Letter Template"
                image={jobappl_img}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <button className="button" onClick={fetchAPI}>
          Fetch Unsplash API
        </button>
      </div>
    </>
  );
};
