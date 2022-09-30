import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { CardLetters } from "./CardLetters";

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
            esercitare un'attività o di compiere un atto mirante alla
            distruzione di alcuno dei diritti e delle libertà in essa
            enunciati.Ogni individuo ha diritto ad un ordine sociale e
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
            esercitare un'attività o di compiere un atto mirante alla
            distruzione di alcuno dei diritti e delle libertà in essa
            enunciati.Ogni individuo ha diritto ad un ordine sociale e
            internazionale nel quale i diritti e le libertà enunciati in questa
            Dichiarazione possano essere pienamente realizzati. Nulla nella
            presente Dichiarazione può essere interpretato nel senso di
            implicare un diritto di un qualsiasi Stato, gruppo o persona di
            esercitare un'attività o di compiere
          </div>
          <div className="d-flex flex-row justify-content-center">
                <CardLetters title='Cover Letter Templates'/>
                <CardLetters title='Resume Templates'/>
                <CardLetters title='Appreciation Letter Template'/>

          </div>
        </div>
      </div>
    </>
  );
};
