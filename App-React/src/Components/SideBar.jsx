import logoMovies from '../assets/images/logo-movies.jpg'
import {Link} from 'react-router-dom'


export const SideBar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logoMovies} alt="Digital House" />
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        {/* <!-- Nav Item - Pages --> */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/lastMovie">
            <i className="fas fa-fw fa-folder"></i>
            <span>Last Movie</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/allMovies">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>All Movies</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/genres">
            <i className="fas fa-fw fa-table"></i>
            <span>Genres</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}


    </>
  )
}