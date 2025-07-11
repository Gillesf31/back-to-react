import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg'
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          My App
        </Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/users' className='nav-link'>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
