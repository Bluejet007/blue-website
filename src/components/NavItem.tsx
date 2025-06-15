import { Link } from "react-router-dom";

interface Props {
    label?: string;
    link?: string;
}

function NavItem({label = "Placeholder text", link}: Props) {
    return <p className="nav-item">
        {!link || link.length === 0 ? label : <Link to={link}>{label}</Link>}
    </p>;
}

export default NavItem;