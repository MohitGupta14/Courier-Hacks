import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { CardLetters } from "./CardLetters";
import coverL_img from './Images/coverletter_sample.png'
import resumeL_img from './Images/resume_sample1.jpg'
import jobappl_img from './Images/job_application.jpg'




export const Home = () => {

  // const getImage = ()=>{
  //   axios.get('https://api.unsplash.com/search/photos?page=1&query=office&client_id=lNpsVvxPSbZm9bkhyfB547j9IibcvoVrWyTDARszbPA')
  //   .then((response)=>{

  //   })

  // }



  return (
    <>
      <div>
      {/* <button className=""image button type="button" data-bs-toggle="collapse" >Get imsge</button> */}
        <div className="d-flex flex-column">
          <div className="my-3 d-flex justify-content-center align-items-center">
            <img src="https://media.istockphoto.com/photos/shot-of-two-men-working-on-their-computers-in-a-modern-office-picture-id1319189303?k=20&m=1319189303&s=612x612&w=0&h=IokmOvk7tWi3jnI9Yqnk0z0k1H8BOW0XSIj7yjsZTD0=" className="image"/>
          <div className="container my-3 paddings margins">
            Ogni individuo ha diritto ad un ordine sociale e internazionale nel
            quale i diritti e le libertà enunciati in questa Dichiarazione
            possano essere pienamente realizzati. Nulla nella presente
            Dichiarazione può essere interpretato nel senso di implicare un
            diritto di un qualsiasi Stato, gruppo o persona di esercitare
            un'attività o di compiere un atto mirante alla distruzione di alcuno
            dei diritti e delle libertà in essa enunciati.Ogni individuo ha
            diritto ad un ordine sociale e internazionale nel quale i diritti e
            le libertà enunciati in questa Dichiarazione possano essere
            pienamente realizzati. Nulla nella presente Dichiarazione può essere
            interpretato nel senso di implicare un diritto di un qualsiasi
            Stato, gruppo o persona di esercitare un'attività o di compiere un
            atto mirante alla distruzione di alcuno dei diritti e delle libertà
            in essa enunciati.Ogni individuo ha diritto ad un ordine sociale e
            internazionale nel quale i diritti e le libertà enunciati in questa
            Dichiarazione possano essere pienamente realizzati. Nulla nella
            presente Dichiarazione può essere interpretato nel senso di
            implicare un diritto di un qualsiasi Stato, gruppo o persona di
            esercitare un'attività o di compiere un atto mirante alla
            distruzione di alcuno dei diritti e delle libertà in essa
            enunciati.Ogni individuo ha diritto ad un ordine sociale e
            internazionale nel quale i diritti e le libertà enunciati in questa
            Dichiarazione possano essere pienamente realizzati. Nulla nella
            presente Dichiarazione può essere interpretato nel senso di
            implicare un diritto di un qualsiasi Stato, gruppo o persona di
            esercitare un'att possano essere pienamente realizzati. Nulla nella
            presente Dichiarazione può essere interpretato nel senso di
            implicare un diritto di un qualsiasi Stato, gruppo o persona di
            esercitare 
          </div>
          </div>
          <div className="d-flex flex-row justify-content-center margin">
                <CardLetters title='Cover Letter Template' image= {coverL_img}/>
                <CardLetters title='Resume Template' image= {resumeL_img}/>
                <CardLetters title='Job Application Letter Template' image= {jobappl_img}/>

          </div>
        </div>
      </div>
    </>
  );
};
