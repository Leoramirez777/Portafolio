import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';

function Main() {
  return (
    <main>
      <div className="seccion-centrada">
        <h2>Sobre mí</h2>
        <p>Hola, soy Leonardo Gabriel Ramirez, estudiante de la universidad tecnologica nacional facultad regional Tucuman.
          Estoy en busca de un proyecto que me ayude a afianzar mis conocimientos en el desarrollo web.
        </p>
        <p>
          Me considero alguien trabajador, confiable y que aprende continuamente, buscando metas cada vez más ambiciosas.
        </p>
      </div>

      <Estudios />
      <SoftSkills />

      <div className="seccion-centrada">
        <h2>Idiomas</h2>
        <p>Inglés: Medio</p>
      </div>

      <div className="seccion-centrada">
        <h2>Experiencia Laboral</h2>
        <ul>
          <li>Agencia de Quiniela</li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
