import React, { Component } from "react";
import "./ListPage.css";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const roms = {
  "Contra.nes": "Contra",
  "Duck_Hunt.nes": "Duck Hunt",
  "Excitebike.nes": "Excitebike",
  "Legend_of_Zelda,_The.nes": "The Legend of Zelda",
  "Megaman.nes": "Megaman",
  "Metroid.nes": "Metroid",
  "Ninja_Gaiden.nes": "Ninja Gaiden",
  "Spy_Hunter.nes": "Spy Hunter",
  "Super_Mario_Bros._+_Duck_Hunt.nes": "Super Mario Bros. + Duck Hunt",
  "Super_Mario_Bros._2.nes": "Super Mario Bros. 2",
  "Super_Mario_Bros._3.nes": "Super Mario Bros. 3",
  "Teenage_Mutant_Ninja_Turtles.nes": "Teenage Mutant Ninja Turtles",
};

class ListPage extends Component {
  render() {
    return (
      <div
        className="container ListPage my-4"
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <header className="mb-4">
              <h1 className="mb-3">JSNES</h1>
              <p>A JavaScript NES emulator.</p>
              <p>
                By <a href="https://twitter.com/bfirsh">Ben Firshman</a>. Source
                on <a href="https://github.com/bfirsh/jsnes">GitHub</a>.
              </p>
            </header>
            <ListGroup className="mb-4">
              {Object.keys(roms).map(key => (
                <Link
                  key={key}
                  to={"/run/" + encodeURIComponent(key)}
                  className="list-group-item"
                >
                  {roms[key]}
                  <span className="float-right">&rsaquo;</span>
                </Link>
              ))}
            </ListGroup>
            <p>Or, drag and drop a ROM file onto the page.</p>
          </div>
        </div>
      </div>
    );
  }

  handleDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  handleDrop = e => {
    e.preventDefault();

    const file = e.dataTransfer.items
      ? e.dataTransfer.items[0].getAsFile()
      : e.dataTransfer.files[0];

    this.props.history.push({ pathname: "/run", state: { file } });
  };
}

export default ListPage;
