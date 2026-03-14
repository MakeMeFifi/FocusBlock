function Navbar(): React.JSX.Element {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Startseite
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Projekte
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Einstellungen
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
