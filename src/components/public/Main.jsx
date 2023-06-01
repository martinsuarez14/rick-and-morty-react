import React, { Component } from "react";
import { Cards } from "./Cards";
import Titulo from "../../images/title.png";
import { Galery } from "./Galery";
import { Finder } from "./Finder";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mascotas: [],
    };
  }

  render() {
    return (
      <main>
        <section className="py-2 text-center container">
          <div className="row py-lg-2">
            <div className="col-lg-6 col-md-8 mx-auto d-flex justify-content-center align-items-center flex-column">
              <img
                style={{ width: "100%" }}
                className="imagen-titulo mt-0"
                src={Titulo}
                alt="Título de la página"
              />
              <div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar Personaje"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <Galery />
          </div>
        </section>

        <Cards />
        <Finder />
      </main>
    );
  }
}
