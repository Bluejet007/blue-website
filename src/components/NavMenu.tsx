import NavItem from "./NavItem";

interface Props {
  navData: {name: string, path: string}[];
}

function NavMenu({navData}: Props) {
  return (
  <nav className="nav-menu">
    <img src="/webicon.svg" alt="" id="logo"/>
    <h3 className="nav-header">Navigation</h3>
    {navData.map((item, index) => (
      <NavItem label={item.name} link={item.path} key={index}/>
    ))}
  </nav>
  );
}

export default NavMenu;