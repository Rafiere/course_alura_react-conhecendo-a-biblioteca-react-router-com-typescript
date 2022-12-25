import cardapio from "data/cardapio.json";

import styles from "./Inicio.module.scss";

const Inicio = () => {
  /* Estamos utilizando o "[...cardapio]" para, ao escolhermos três itens aleatórios do cardápio, não modificarmos o array original, e sim, criarmos um novo array apenas com os itens escolhidos, garantindo a imutabilidade. */

  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.titulo}>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => {
          return (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomendado__botao}>Ver Mais</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Inicio;
