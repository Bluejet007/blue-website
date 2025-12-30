import { Link } from 'react-router';
import '../styling/NavMenu.css'
import NavItem from './NavItem';

interface Props {
  navData: {name: string, path: string}[];
}

function NavMenu({navData}: Props) {
  return (
    <nav className='nav-menu'>
      <Link to={'/'}><img src='/tulip_logo.png' alt='' id='logo'/></Link>
      <h3 className='nav-header'>Navigation</h3>
      {navData.map((item, index) => <NavItem
        label={item.name}
        link={item.path}
        key={index}
      />)}
    </nav>
  );
}

export default NavMenu;