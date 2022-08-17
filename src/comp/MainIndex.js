import React from 'react';
import PerguntasFreq from './_1_home/PerguntasFreq';

function MainIndex() {
  return (
    <main>
      <section>SLIDER</section>

      <article>
        <h1>Tokyo 東京 Lash まつ毛</h1>
        <p>
          Reunimos em um único lugar profissionais comprometidas que se alinham
          com a nossa filosofia para criar o melhor com disciplina e dedicação.
          Através de uma jornada de centenas de horas e com olhar atento, nossas
          extensionistas são treinadas e validadas pela Nanda Saeko para
          oferecer um serviço em comum: cílios longos, perfeitos e duráveis.
        </p>
      </article>

      <article>CARDS SERVIÇOS</article>

      <article>
        <PerguntasFreq />
      </article>
    </main>
  );
}

export default MainIndex;
