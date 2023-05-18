import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './pages/Product';


export default function App() {
  return (
    <div className=''>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand  " href="#">
            <h3 className='text-warning m-0' style={{ fontFamily: 'Sarina' }}>Trundler</h3>
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link h4 m-3 " aria-current="page" href="#">Electronics</a>
              <a className="nav-link h4 m-3 " href="#">Jewelery</a>
              <a className="nav-link h4 m-3 " href="#">Men's clothing</a>
              <a className="nav-link h4 m-3 " href="#">Women's clothing</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <Product/>
    </div>
  );
}