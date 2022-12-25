import cardapio from "data/cardapio.json";

import styles from "./Inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";

import nossaCasa from "assets/casa.png";

import { useNavigate } from "react-router-dom";

const Inicio = () => {
  /* Estamos utilizando o "[...cardapio]" para, ao escolhermos três itens aleatórios do cardápio, não modificarmos o array original, e sim, criarmos um novo array apenas com os itens escolhidos, garantindo a imutabilidade. */

  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  const redirecionarParaDetalhes = (prato: typeof cardapio[0]) => {
    navigate(`/prato/${prato.id}`, {
      state: {
        prato,
      },
    });
  };

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => {
          return (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button
                className={styles.recomendado__botao}
                onClick={() => redirecionarParaDetalhes(item)}
              >
                Ver Mais
              </button>
            </div>
          );
        })}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Inicio;
