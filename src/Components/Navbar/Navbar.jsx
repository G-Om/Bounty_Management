import './Navbar.css';


export const NavComponent = () => {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-dark nav-color-sid">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            Welcome to Bounties
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
