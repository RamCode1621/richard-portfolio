import React from 'react'
import './Publication.css'
function Publication() {
    return (     
    <div className="Publication">
        <div className="Publication-head">
            <h1>Webinar de desarrollo web.</h1>
            <span>2022-01-14</span>
        </div>
        <hr />
        <div className="Publication-body">
            <img src="https://richard-portfolio-api.herokuapp.com/images/info-webinar.jpeg" alt="" />

            <p>El pasado 6 de septiembre del 2021 se compartio con los estudienates del colegio Juan XXIII en la especialidad de sistemas informaticos un webinar introductorio por video conferencia online, esta actividad fue realizada con el objetivo en difundir informacion y motivar a los jovenes a estudiar alguna carrera relacionada con el desarrollo de software y desarrollo web.    
            </p>
            <p>
                Dentro del webinar se trataron diferentes puntos inportantes que estan relacionados con el area laboral.
            </p>
            <br /><br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3o4YXXYVhV4?start=647" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    )
}

export default Publication
