import React from "react";
import styles from "./PaginaPadrao.module.scss";

import { Outlet } from "react-router-dom";

import stylesTema from "styles/Tema.module.scss";

const PaginaPadrao = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        {/* O "Outlet" contém todos os elementos "children" das rotas em que o "PaginaPadrao" é um elemento-pai. */}
        <Outlet />
      </div>
    </>
  );
};

export default PaginaPadrao;
