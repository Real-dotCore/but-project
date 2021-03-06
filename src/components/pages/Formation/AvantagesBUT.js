import React from "react";

const AvantagesBUT = () => {
  return (
    <div className="AvantagesBUT">
      <h2 id="paddingTitleTop">Les caractéristiques du Bachelor Universitaire de Technologie</h2>
      <ul>
        <li className="formAnim">
          <span>Formation en 3 ans</span>
          <i class="fas fa-business-time"></i>
          
        </li>
        <li className="bacAnim">
          <span>Niveau d'études : BAC +3</span>
          <i class="fas fa-medal"></i>
        </li>
        <li className="ectsAnim">
          <span>180 Crédits ECTS</span>
          <i class="fas fa-coins"></i>
        </li>
        <li className="cursAnim">
          <span>Différents cursus possibles</span>
          <i class="fas fa-map-signs"></i>
        </li>
        <li className="speAnim">
          <span>Différentes spécialités par Cursus</span>
          <i class="fas fa-star"></i>
        </li>
      </ul>
      <br></br>
      <div className="infoBUT">
        <ul>
          <li className="plusInfos">
            <a href="https://iut-roanne.univ-st-etienne.fr/fr/tous-les-faits-marquants/annee-2020-2021-2/zoom-sur/but.html" target="_blank" rel="noreferrer">      
              <i class="fas fa-globe"></i>
              <span>Zoom sur le B.U.T.</span>
            </a>
          </li>
          <li className="pdfAnim">
            <a href="https://dossier.univ-st-etienne.fr/roa-jpo/www/Visite_Virtuelle/files/B.U.T.%20IUT%20ROANNE%202021.pdf" target="_blank" rel="noreferrer" >
              <i class="fas fa-file-pdf"></i>
              <span>Document d'information (PDF)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AvantagesBUT;
