import { Link } from "react-router-dom";

interface Props {
    label?: string;
    link?: string;
}

function NavItem({label = "Placeholder text", link}: Props) {
    if(!link || link.length === 0)
        return <p className="nav-item">label</p>;
    else
        return <Link to={link}><p className="nav-item">{label}</p></Link>;
}

export default NavItem;