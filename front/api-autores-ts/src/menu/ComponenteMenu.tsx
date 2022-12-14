import { Link, NavLink } from "react-router-dom";

export default function ComponenteMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Api - Autores
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/autores">
              Autores
            </Link>
            <Link className="nav-link" to="/libros">
              Libros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
