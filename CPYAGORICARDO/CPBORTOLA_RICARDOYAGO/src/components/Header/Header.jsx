import React from "react";
import "../Header/header.css";

export default function Header() {
  return (
    <body>
      <section className="header-site">
        <div className="container">
          <h1 className="text-center">Seja bem-vindo ao drone parallax</h1>
          <p className="text-center lead">
            Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Non,
            atque maiores fugit iste ad pariatur adipisci eaque temporibus autem
            distinctio, dolorum perferendis, similique nesciunt facilis sunt
            voluptate, modi repellendus dolorem.
          </p>
          <p className="text-center">
            <a href="#" className="btn btn-vermelho">
              Cadastre-se
            </a>
          </p>
        </div>
      </section>
    </body>
  );
}
